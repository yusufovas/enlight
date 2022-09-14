const model = require("../queires/main");

module.exports = {
  get: async (req, res, next) => {
    try {
      const courses = await model.get_all();
      res.render("dashboard.ejs", { courses });
    } catch (error) {
      next(error);
    }
  },
  post: async (req, res, next) => {
    try {
      const { title, price } = req.body;

      await model.add(title, parseInt(price));

      res.redirect("/dashboard");
    } catch (error) {
      next(error);
    }
  },
  deleted_course: async (req, res, next) => {
    try {
      const { course_id } = req.body;

      await model.deleted_course(course_id);

      res.json("deleted");
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { title, price, id } = req.body;

      const course = await model.single_course(id);

      const updated = await model.update(
        title ? title : course.title,
        price ? price : course.title,
        id
      );
      res.json(updated);
    } catch (error) {
      next(error);
    }
  },
};
