const jwt = require("jsonwebtoken");
const SECRET = process.env.ACCESS_TOKEN_SECRET;
const User = require("../models/userSchema");

const isAuth = async (req, res, next) => {
  const bearer = req.get("Authorization");
  const token = bearer.split(" ")[1];
  const username = bearer.split(" ")[2];

  if (!token) {
    return res.status(401).send({ msg: "Access token missing" });
  }

  const payload = jwt.verify(token, SECRET);
  const user = await User.findById(payload.userid);
  console.log(user);

  if (user.username === username) {
    next();
  } else {
    res.status(401).send({ msg: "You are not authorized" });
  }
};

module.exports = isAuth;
