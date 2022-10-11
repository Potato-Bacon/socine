const express = require("express");
const UserListings = require("../models/userListingSchema");
const User = require("../models/userSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // const userListings = await UserListings.find().exec();
    const submit = await UserListings.find({}, { submittedBy: 1 });
    const data = await User.find({ _id: { $in: submit } });
    // const { submittedBy } = submit;

    res.status(200).send();
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

module.exports = router;
