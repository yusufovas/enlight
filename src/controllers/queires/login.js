const data = require('../../utils/postgres')

const login = `select * from users where user_name = $1 and user_password = $2`;

const handle_login = (user_name, user_password) => data.fetchRow(login, user_name, user_password);

module.exports = {
  handle_login
};
