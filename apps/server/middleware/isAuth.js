const jwt = require("jsonwebtoken");
const SECRET = process.env.ACCESS_TOKEN_SECRET;
const User = require("../models/userSchema");

const isAuth = async (req, res, next) => {
  const bearer = req.get("Authorization");
  const token = bearer.split(" ")[1];

  try {
    const payload = jwt.verify(token, SECRET);
    console.log(payload);
    const user = await User.findById(payload.userid);

    if (user) {
      res.locals.user = user;
      next();
    } else {
      res.status(401).send({ msg: "Unauthorized" });
    }
  } catch (error) {
    res.status(401).send({ error });
  }
};

module.exports = isAuth;
