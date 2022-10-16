const express = require("express");
const isAuth = require("../middleware/isAuth");
const RoomListing = require("../models/roomListingSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const roomListings = await RoomListing.find().exec();
    res.status(200).send(roomListings);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

router.post("/submit", async (req, res) => {
  const newRoomListing = req.body;

  RoomListing.create(newRoomListing, (error, submission) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.status(201).send(submission);
    }
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const roomListing = await RoomListing.findById({ _id: id }).exec();

    if (roomListing === null) {
      res.status(400).send({ msg: "No listings" });
    } else {
      res.status(200).send(roomListing);
    }
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

router.put("/:id", isAuth, async (req, res) => {
  const { id } = req.params;
  const update = req.body;

  try {
    const updateListing = await RoomListing.findByIdAndUpdate(id, update, {
      new: true,
    }).exec();
    console.log(updateListing);

    if (updateListing === null) {
      res.status(400).send({ msg: "No listings" });
    } else {
      res.status(200).send(updateListing);
    }
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.post("/search", async (req, res) => {
  const mrtOrTown = [];
  const search = [];

  try {
    //if user keys in search input
    if (req.body.input !== undefined) {
      mrtOrTown.push({ town: { $regex: req.body.input, $options: "i" } });
      mrtOrTown.push({ mrt: { $regex: req.body.input, $options: "i" } });

      search.push({
        $or: mrtOrTown,
      });
      // const result = await UserListings.find({
      //   $or: mrtOrTown,
      // });
      // res.status(200).send(result);
    }

    //to combine with filter

    if (req.body.amenities !== undefined) {
      search.push({ amenities: req.body.amenities });
    }

    console.log(search, "this is search array");

    if (req.body.userListingTag !== undefined) {
      search.push({ userListingTag: req.body.userListingTag });
    }
    const budget = { budget: { $gte: null, $lte: null } };
    console.log(budget.budget, "first");

    if (req.body.min !== undefined) {
      budget.budget.$gte = req.body.min;
    } else {
      delete budget.budget.$gte;
    }

    // console.log(budget, "after min logic");

    if (req.body.max !== undefined) {
      budget.budget.$lte = req.body.max;
    } else {
      delete budget.budget.$lte;
    }
    console.log(budget, "after max logic");

    if (budget.budget.$gte === undefined && budget.budget.$lte === undefined) {
      console.log("no properties found");
    } else {
      search.push(budget);
    }

    console.log(search, "what is this");

    const results = await RoomListing.find({
      $and: search,
    })
      .populate({
        path: "submittedBy",
        select:
          "-password -email -createdAt -updatedAt -favUserListing -favRoomListing -getEmail -mobileNumber",
      })
      .populate("interests")
      .populate("mbti")
      .exec();
    console.log(results.length);
    res.send(results);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
});

module.exports = router;
