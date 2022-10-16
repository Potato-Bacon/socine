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

router.put("/edit/:id", async (req, res) => {
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

    if (req.body.listingTags !== undefined) {
      search.push({ listingTags: req.body.listingTags });
    }
    const rentPerMonth = { rentPerMonth: { $gte: null, $lte: null } };
    console.log(rentPerMonth.rentPerMonth, "first");

    if (req.body.min !== undefined) {
      rentPerMonth.rentPerMonth.$gte = req.body.min;
    } else {
      delete rentPerMonth.rentPerMonth.$gte;
    }

    // console.log(budget, "after min logic");

    if (req.body.max !== undefined) {
      rentPerMonth.rentPerMonth.$lte = req.body.max;
    } else {
      delete rentPerMonth.rentPerMonth.$lte;
    }
    console.log(rentPerMonth, "after max logic");

    if (
      rentPerMonth.rentPerMonth.$gte === undefined &&
      rentPerMonth.rentPerMonth.$lte === undefined
    ) {
      console.log("no properties found");
    } else {
      search.push(rentPerMonth);
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
      .exec();
    console.log(results.length);
    res.send(results);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
});

router.post("/recommendations", async (req, res) => {
  const { rentPerMonth, mrt, town } = req.body;
  try {
    const userListingRecommendations = await RoomListing.find({
      $and: [
        { $or: [{ mrt: mrt }, { town: town }] },
        { rentPerMonth: { $lte: rentPerMonth } },
      ],
    }).exec();

    res.status(200).send(userListingRecommendations);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

//search by submittedBy ObjectID
router.get("/submittedby/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const searchBySubmitted = await RoomListing.find({
      submittedBy: id,
    });
    res.status(200).send(searchBySubmitted);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteListing = await RoomListing.findByIdAndDelete({ _id: id });
    res.status(200).send(deleteListing);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

module.exports = router;
