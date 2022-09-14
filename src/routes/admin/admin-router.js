const { Router } = require("express");
const admin = require("../../controllers/admin/admin");
const groups = require("../../controllers/groups/groups");
const users = require("../../controllers/users/users");
const access = require("../../middlewares/access");
const router = Router();

router
  .get("/dashboard", access, admin.get)
  .delete("/delete-course", access, admin.deleted_course)
  .post("/new-course", access, admin.post)

  .get("/view-users", access, users.get_users)
  .post("/add-user", access, users.new_user)
  .delete("/users", access, users.delete_user)

  .get("/view-groups", access, groups.get_groups)
  .post("/add-group", access, groups.add_group)
  .delete("/delete-group", access, groups.delete_group);
module.exports = router;
