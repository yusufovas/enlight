const data = require("../../utils/postgres");

const users = `select * from users where user_status <> 1`;
const delete_user = `call delete_user($1)`
const teacher_groups = `select * from groups where teacher_id = $1`;
const group_students = `
select
    g.group_id,
    g.group_title,
    u.user_name
from
    group_members m
inner join
    users u
on
    m.student_id = u.user_id
inner join
    groups g
on
    m.group_id = g.group_id
where
    g.group_id = $1
`;

const student_groups = `
select 
    g.group_id,
    g.group_title
from
    group_members m
inner join
    users u
on m.student_id = u.user_id
inner join 
    groups g
on m.group_id = g.group_id

where 
    m.student_id = $1
`;

const new_user = `call new_user($1, $2, $3)`;

const all_users = () => data.fetchData(users);
const teacherGroups = (id) => data.fetchData(teacher_groups, id);
const groupStudents = (id) => data.fetchData(group_students, id);
const studentGroups = (id) => data.fetchData(student_groups, id);
const add_user = (user_name, user_password, user_status) =>
  data.fetchRow(new_user, user_name, user_password, user_status);
const user_delete = id => data.fetchRow(delete_user, id)

module.exports = {
  teacherGroups,
  groupStudents,
  studentGroups,
  all_users,
  add_user,
  user_delete
};
