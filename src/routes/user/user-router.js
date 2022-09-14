const { Router } = require("express");
const main = require("../../controllers/main/main.js");
const tasks = require("../../controllers/tasks/tasks.js");
const users = require("../../controllers/users/users.js");
const access = require("../../middlewares/access");
const router = Router();

router
  .get("/teachers", access, users.teacher_groups)
  .get("/group-students", access, users.group_students)
  .get("/main", main.get)
  .get("/student", access, users.student_groups)
  .post("/tasks", access, tasks.post)
  .get("/tasks", access, tasks.get)
  .get("/tasks-for-students", access, tasks.get_for_student)
  .delete("/tasks", access, tasks.delete);

module.exports = router;
