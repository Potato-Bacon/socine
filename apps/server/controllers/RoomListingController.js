const express = require("express");
const RoomListing = require("../models/roomListingSchema");
const router = express.Router();


router.get("/seed", async (req,res)=> {
    const roomListings = []

    await RoomListing.deleteMany()

    RoomListing.create(roomListings, (error, listings) => {
        if (error) {
          res.status(500).send({ error });
        } else {
          res.status(201).send(listings);
        }
      });
    
})



router.get("/", async (req, res) => {
  try {
    const roomListings = await RoomListing.find();
    res.status(200).send(roomListings);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

router.get("/:id", async (req,res)=> {
    try{
        const roomListings = await RoomListing.find({})
    }
})