const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const newUser = req.body;

  try {
    const { username, email } = newUser;
    const user = await User.find({
      $or: [{ username: username }, { email: email }],
    });
    const usernameExist = user.find((user) => user.username === username);
    const emailExist = user.find((user) => user.email === email);
    if (usernameExist) {
      return res.status(500).send({ msg: "Username in use" });
    }
    if (emailExist) {
      return res.status(500).send({ msg: "Email in use" });
    }
    if (!usernameExist && !emailExist) {
      const newUserPasswordHash = {
        ...newUser,
        password: bcrypt.hashSync(newUser.password, 10),
      };
      User.create(newUserPasswordHash, (error, user) => {
        if (error) {
          res.status(500).send({ error });
        } else {
          res.status(201).send(user);
        }
      });
    }
  } catch (error) {
    res.send({ msg: error });
  }
});

module.exports = router;
