const express = require("express");
const isAuth = require("../middleware/isAuth");
const router = express.Router();
const User = require("../models/userListingSchema");
const RoomListing = require("../models/roomListingSchema");

router.get("/", isAuth, async (req, res) => {
  try {
    const featuredUserListings = await User.find().limit(10);
    const featuredRoomListings = await RoomListing.find().limit(10);

    res.status(200).send(featuredUserListings, featuredRoomListings);
  } catch (error) {
    console.log(error);
    res.send({ msg: error });
  }
});

module.exports = router;
