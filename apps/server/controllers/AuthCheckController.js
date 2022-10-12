const express = require("express");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.post("/", isAuth, async (req, res) => {
  res.send("success");
});

module.exports = router;
