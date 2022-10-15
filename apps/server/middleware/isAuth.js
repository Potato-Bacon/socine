const jwt = require("jsonwebtoken");
const SECRET = process.env.ACCESS_TOKEN_SECRET;
const User = require("../models/userSchema");

const isAuth = async (req, res, next) => {
  const bearer = req.get("Authorization");
  const token = bearer.split(" ")[1];
  const userid = bearer.split(" ")[2];

  if (!token) {
    return res.status(401).send({ msg: "Access token missing" });
  }

  const foundUser = await User.findById({ _id: userid }).exec();

  if (!foundUser) {
    return res.status(401).send({ msg: "Userid not found" });
  }
  console.log(foundUser._id, "hereeeeeeeee");

  jwt.verify(token, SECRET, (err, decoded) => {
    const tokenUserID = decoded.userid;
    console.log(tokenUserID, "decoded");
    console.log(err, "error");
    console.log(decoded.userid);
    if (foundUser._id === userid) {
      res.locals.user = userid;
      next();
    } else {
      res.status(401).send({ msg: "hihihihi" });
    }
  });
};

module.exports = isAuth;
