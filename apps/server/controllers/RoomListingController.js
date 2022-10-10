const express = require("express");
const RoomListing = require("../models/roomListingSchema");
const router = express.Router();

router.get("/seed", async (req, res) => {});

router.get("/", async (req, res) => {
  try {
    const roomListings = await RoomListing.find();
    res.status(200).send(roomListings);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

router.get("/searchfilter", async (req, res) => {
  const { interest, personality } = req.query;

  try {
    const roomListings = await RoomListing.find({});
  } catch (error) {
    console.log(error);
  }
});
