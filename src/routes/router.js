const { Router } = require("express");
const auth = require("../controllers/auth/login.js");
const router = Router();

router
  .get("/login", auth.get)
  .post("/login", auth.post)

module.exports = router;
