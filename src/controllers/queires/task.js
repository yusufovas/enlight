const data = require("../../utils/postgres");

const select = `select * from tasks where group_id = $1`;
const insert = `call add_task($1, $2)`;
const update = `call update_task($1, $2, $3)`;
const delete_task = `call delete_task($1)`;
const single_task = `select * from tasks where task_id = $1`;

const all_tasks = (id) => data.fetchData(select, id);
const add_task = (task_title, group_id) =>
  data.fetchData(insert, task_title, group_id);
const deleteTask = (id) => data.fetchRow(delete_task, id);
const update_task = (task_title, group_id, task_id) =>
  data.fetchRow(update, task_title, group_id, task_id);
const get_single = (id) => data.fetchRow(single_task, id);

module.exports = {
  all_tasks,
  add_task,
  deleteTask,
  update_task,
  get_single,
};
