require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

//* Login route to get JWT token and verify credentials
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).send({ msg: "Username and password are required." });

  const foundUser = await User.findOne({ username: username }).exec();

  if (!foundUser) return res.status(500).send({ msg: "Username not found" });

  // verify password
  const match = bcrypt.compareSync(password, foundUser.password);

  if (match) {
    const userid = foundUser._id;
    const username = foundUser.username;
    const payload = { userid, username };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).send({ msg: "login", payload, accessToken });
  } else res.status(400).send({ msg: "Wrong password" });
});

module.exports = router;
