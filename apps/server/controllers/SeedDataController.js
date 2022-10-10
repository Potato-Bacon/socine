require("dotenv").config();
const express = require("express");
const RoomListing = require("../models/roomListingSchema");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ msg: "seed route" });
});

router.post("/user", (req, res) => {
  res.status(200).send({ msg: "user seed route" });
});

router.post("/roomlisting", async (req, res) => {
  const roomListings = [
    {
      title: "Windy and Spacious One-bedroom Studio Apartment",
      description:
        "Spacious apartment in the hearts of east side, near to amenities and friendly housemates. Contact me now!",
      address: "147 Tampines Avenue 5",
      town: "",
    },
  ];

  await RoomListing.deleteMany();

  RoomListing.create(roomListings, (error, listings) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.status(201).send(listings);
    }
  });
  res.status(200).send({ msg: "user seed route" });
});

router.post("/country", async (req, res) => {
  res.status(200).send({ msg: "country seed route" });
});

router.post("/interest", async (req, res) => {
  res.status(200).send({ msg: "interest seed route" });
});

router.post("/mbti", async (req, res) => {
  res.status(200).send({ msg: "mbti seed route" });
});

router.post("/amenities", async (req, res) => {
  res.status(200).send({ msg: "amenities seed route" });
});

router.post("/listroomtag", async (req, res) => {
  res.status(200).send({ msg: "listroomtag seed route" });
});

router.post("/userlistingtag", async (req, res) => {
  res.status(200).send({ msg: "userlistingtag seed route" });
});

router.post("/town", async (req, res) => {
  res.status(200).send({ msg: "town seed route" });
});

router.post("/mrt", async (req, res) => {
  res.status(200).send({ msg: "mrt seed route" });
});

module.exports = router;
