const express = require("express");
const isAuth = require("../middleware/isAuth");
const router = express.Router();
const UserListing = require("../models/userListingSchema");
const RoomListing = require("../models/roomListingSchema");

router.get("/", async (req, res) => {
  try {
    const featuredUserListings = await UserListing.find().limit(8);
    // const featuredRoomListings = await RoomListing.find().limit(10);

    res.status(200).send(featuredUserListings);
  } catch (error) {
    console.log(error);
    res.send({ msg: error });
  }
});

module.exports = router;
