const { fetchData, fetchRow } = require("../../utils/postgres");

const get = `select * from courses`;
const new_course = `call new_course($1, $2)`;
const get_single = `select * from courses where id = $1`;
const update_course = `call update_course($1, $2, $3)`;
const delete_course = `call delete_course($1)`;

const get_all = () => fetchData(get);
const add = (title, price) => fetchRow(new_course, title, price);
const single_course = (id) => fetchRow(get_single, id);
const update = (title, price, id) => fetchRow(update_course, title, price, id);
const deleted_course = (id) => fetchRow(delete_course, id);

module.exports = {
  get_all,
  add,
  single_course,
  update,
  deleted_course,
};
