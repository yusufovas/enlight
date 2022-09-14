const {
  JsonWebTokenError,
  TokenExpiredError,
  verify,
} = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      res.redirect("/login");
    }
    verify(token, "secret_key", (err, decode) => {
      if (token instanceof JsonWebTokenError) {
        res.redirect("/login");
      }
      if (token instanceof TokenExpiredError) {
        res.redirect("/login");
      }

      req.user_id = decode.id;
      req.role = decode.role
      return next();
    });
  } catch (err) {
    return next(err);
  }
};
