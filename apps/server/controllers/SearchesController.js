const express = require("express");
const RoomListing = require("../models/roomListingSchema");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listings = await RoomListing.find({
      title: { $regex: id, $options: "i" },
    });
    res.status(201).send(listings);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
