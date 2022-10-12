const { request } = require("express");
const express = require("express");
const UserListings = require("../models/userListingSchema");
const User = require("../models/userSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allUserListings = await UserListings.findById(
      "6345c9ee40942d682530bef2"
    )
      .populate("preferredMrts")
      .exec();

    res.status(200).send(allUserListings);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
});

router.get("/search", async (req, res) => {
  const { budget, preferredTown, preferredMrts, interest, mbti } = req.query;
  //   console.log(budget, preferredTown, preferredMrts, interest};

  // if (req.query.budget === undefined) {
  //   req.query.budget = "";
  // }
  // if(req.query.preferredTown === undefined) {
  //   req.query.preferredTown = ""
  // }
  // if(req.query.preferredMrts === undefined) {
  //   req.query.preferredMrts = ""
  // }

  // if(req.)
  const results1 = await UserListings.find({ budget: budget });
  const results = await UserListings.find({
    $or: [
      { budget: budget },
      { preferredTown: preferredTown },
      { preferredMrts: preferredMrts },
      { interest: interest },
      { mbti: mbti },
    ],
  });
  res.send(results);
});

module.exports = router;
