const groups = require("../queires/groups");
const users = require("../queires/users");
const courses = require("../queires/main");
module.exports = {
  get_groups: async (req, res, next) => {
    try {
      const all_groups = await groups.get();

      res.render("view-groups-admin.ejs", { all_groups });
    } catch (error) {
      next(error);
    }
  },
  add_group: async (req, res, next) => {
    try {
      let { course_id, group_title, teacher_id } = req.body;
      console.log(course_id, group_title, teacher_id);
      const all_users = await users.all_users();
      const all_courses = await courses.get_all();
      const foundCourse = all_courses.find((el) => el.title == course_id);
      const foundUser = all_users.find((el) => el.user_name == teacher_id);
      if (foundCourse) {
        course_id = foundCourse.id;
      }
      if (foundUser) {
        teacher_id = foundUser.user_id;
      }

      await groups.add(parseInt(course_id), group_title, parseInt(teacher_id));
      res.redirect("/view-groups");
    } catch (error) {
      next(error);
    }
  },
  delete_group: async (req, res, next) => {
    try {
      const { group_id } = req.body;

      await groups.delete_group(group_id);
      res.redirect("/view-groups");
    } catch (error) {
      next(error);
    }
  },
};
