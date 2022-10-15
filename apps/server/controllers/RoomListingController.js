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

router.get("/search", async (req, res) => {
  const {
    search,
    description,
    address,
    town,
    mrt,
    amenities,
    listingTags,
    bathroomType,
    genderPreference,
    apartmentType,
    rentPerMonth,
  } = req.query;
  const searchRooms = await RoomListing.find({
    $or: [
      { title: { $regex: search, $options: "i" } },
      { town: { $regex: search, $options: "i" } },
    ],
  });

  console.log(title, town);
  // res.send(city, location);
});

module.exports = router;
