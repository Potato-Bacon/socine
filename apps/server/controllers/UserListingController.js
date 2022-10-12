const express = require("express");
const UserListings = require("../models/userListingSchema");

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

router.get("/search", async (req, res) => {
  const mrt = [];
  const town = [];

  try {
    if (req.body.mrt !== undefined) {
      mrt.push({ mrt: req.body.mrt });
    }
    console.log(mrt);

    if (req.body.town !== undefined) {
      town.push({ town: req.body.town });
    }
    const searchLocation = await UserListings.find({
      $or: [mrt, town],
    }).exec();

    if (searchLocation === null) {
      res.status(500).send({ msg: "no results" });
    } else {
      res.status(200).send(searchLocation);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
});

router.get("/search/filter", async (req, res) => {
  // console.log(req.query);
  const interest = [];
  // const title = [];
  // const budget = [];
  // const preferredMrts = [];
  // const preferredTown = [];
  // const mbti = [];

  if (req.query.interest !== undefined) {
    interest.push({ interests: req.query.interest });
  }

  // if (req.query.title !== undefined) {
  //   req.query.title = "";
  // }
  // console.log(interest);
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

  const results = await UserListings.find({
    $or: interest,
  }).exec();
  console.log(results.length);
  res.send({ results });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const userListing = await UserListings.findById(id)
      .populate({
        path: "submittedBy",
        select:
          "-password -email -createdAt -updatedAt -favUserListing -favRoomListing -getEmail",
      })
      .populate("interests")
      .populate("mbti")
      .exec();

    if (userListing === null) {
      res.status(500).send({ error: "Listing not found" });
    } else {
      res.status(200).send(userListing);
    }
  });
});
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

module.exports = router;
