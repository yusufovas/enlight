const login = require("../queires/login");
const { sign } = require("../../utils/jwt");

module.exports = {
  get: (_, res, next) => {
    try {
      res.render("login.ejs");
    } catch (error) {
      next(error);
    }
  },
  post: async (req, res, next) => {
    try {
      const { name, password } = req.body;

      const user = await login.handle_login(name, password);

      if (user && user.user_status == 1) {
        res.cookie(
          "token",
          sign({
            id: user.user_id,
            role: 'admin'
          })
        );
        res.cookie("role", "admin");
        res.redirect("/dashboard");
      }
      if (user && user.user_status == 2) {
        res.cookie(
          "token",
          sign({
            id: user.user_id,
          })
        );
        res.cookie("role", "teacher");
        res.redirect("/teachers");
      }
      if (user && user.user_status == 3) {
        res.cookie(
          "token",
          sign({
            id: user.user_id,
          })
        );
        res.cookie("role", "student");
        res.redirect("/student");
      }
      else {
        res.redirect('/login')
      }
    } catch (error) {
      next(error);
    }
  },
};
