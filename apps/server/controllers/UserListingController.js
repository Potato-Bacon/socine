const { request, Router } = require("express");
const express = require("express");
const UserListings = require("../models/userListingSchema");
const User = require("../models/userSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allUserListings = await UserListings.find()
      .populate({
        path: "submittedBy",
        select:
          "-password -email -createdAt -updatedAt -favUserListing -favRoomListing -getEmail",
      })
      .exec();
    res.status(200).send(allUserListings);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
});

router.post("/submit", async (req, res) => {
  const newUserListing = req.body;

  await UserListings.create(newUserListing, (error, submission) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.status(201).send(submission);
    }
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const userListing = await UserListings.findById(id)
    .populate({
      path: "submittedBy",
      select:
        "-password -email -createdAt -updatedAt -favUserListing -favRoomListing -getEmail",
    })
    .exec();

  if (userListing === null) {
    res.status(500).send({ error: "Listing not found" });
  } else {
    res.status(200).send(userListing);
  }
});
// router.get("/submittedby", async (req, res) => {
//   User.find({_id: })
// });

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const userListing = req.body;
  const updatedListing = await UserListings.findByIdAndUpdate(id, userListing, {
    new: true,
  });
  if (updatedListing === null) {
    res.status(500).send({ error: "Listing not found" });
  } else {
    res.status(200).send(updatedListing);
  }
});

router.get("/search", async (req, res) => {
  console.log(req.query.interest);
  const interest = [];

  // const title = [];
  // const budget = [];
  // const preferredMrts = [];
  // const preferredTown = [];
  // const mbti = [];

  if (req.query.interest !== undefined) {
    // const abc = req.query.interest;
    interest.push({ interest: req.query.interest });
  }

  // if (req.query.title !== undefined) {
  //   req.query.title = "";
  // }
  console.log(interest);

  // if (req.query.budget !== undefined) {
  //   budget.push({ budget: req.query.budget });
  // }
  // console.log(array);
  // console.log(req.query.budget);
  // if (req.query.preferredTown === NaN) {
  //   req.query.preferredTown = "";
  // }

  // if (req.query.preferredMrts === undefined) {
  //   req.query.preferredMrts = "";

  // console.log(req.query.preferredMrts);
  // req.query.preferredMrts = "";}

  // if (req.query.interest === isNaN) {
  //   req.query.interest = "";
  // }
  // if (req.query.mbti === undefined) {
  //   req.query.mbti = "";
  // }
  // console.log("titleNew", req.query.title);
  // console.log("budgetNew", req.query.budget);
  // console.log("preferredMrtsNew", req.query.preferredMrts);
  // console.log("preferredTownNew", req.query.preferredTown);
  // console.log("interestNew", req.query.interest);
  // console.log("mbtiNew", req.query.mbti);

  const results = await UserListings.find(
    {
      $or: interest,
    },
    { _id: 1, preferredMrts: 0, preferredTown: 0 }
  )
    // .populate({
    //   path: "submittedBy",
    //   select: "-password -email",
    //   populate: [
    //     {
    //       path: "interest",
    //       model: "Interest",
    //     },
    //     { path: "mbti", model: "Mbti" },
    //   ],
    // })
    .exec();
  // console.log(results.length);
  res.send({ results });
});

module.exports = router;
