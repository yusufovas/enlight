const jwt = require("jsonwebtoken");

module.exports = {
  sign: (payload) => {
    return jwt.sign(payload, 'secret_key')
  }
};
