const users = require("../queires/users");

module.exports = {
  get_users: async (_, res, next) => {
    try {
      const all_users = await users.all_users();
      for (let i = 0; i < all_users.length; i++) {
        if (all_users[i].user_status == 2) {
          all_users[i].user_status = "Teacher";
        }
        if (all_users[i].user_status == 3) {
          all_users[i].user_status = "Student";
        }
      }
      res.render("view_users_admin.ejs", { all_users });
    } catch (error) {
      next(error);
    }
  },
  new_user: async (req, res, next) => {
    try {
      const { user_name, user_password, user_status } = req.body;

      await users.add_user(
        user_name,
        user_password,
        user_status ? parseInt(user_status) : 3
      );
      res.redirect("/dashboard");
    } catch (error) {
      next(error);
    }
  },
  teacher_groups: async (req, res, next) => {
    try {
      const { user_id } = req;

      const groups = await users.teacherGroups(user_id);
      res.render("teachers.ejs", { groups });
    } catch (error) {
      next(error);
    }
  },
  group_students: async (req, res, next) => {
    try {
      const { group_id } = req.cookies;

      const group_members = await users.groupStudents(group_id);

      res.render("group-students.ejs", { group_members });
    } catch (error) {
      next(error);
    }
  },
  student_groups: async (req, res, next) => {
    try {
      const { user_id } = req;
      const groups = await users.studentGroups(user_id);

      res.render("students.ejs", { groups });
    } catch (error) {
      next(error);
    }
  },
  delete_user: async (req, res, next) => {
    try {
      const { user_id } = req.body;

      await users.user_delete(user_id);

      res.redirect("/view-users");
    } catch (error) {
      next(error);
    }
  },
};
