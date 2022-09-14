const { fetchData, fetchRow } = require("../../utils/postgres");

const all_groups = `
    select g.group_id, g.group_title, c.title as course, u.user_name as teacher
    from groups g
    inner join courses c
    on c.id = g.course_id
    inner join users u
    on u.user_id = g.teacher_id
    order by g.group_id
`;

const delete_query = `delete from groups where group_id = $1`
const new_group = `call new_group($1, $2, $3)`

const get = () => fetchData(all_groups);
const add = (course_id, group_title, teacher_id) => fetchRow(new_group, course_id, group_title, teacher_id)
const delete_group = id => fetchRow(delete_query, id)

module.exports = {
  get,
  add,
  delete_group
};
