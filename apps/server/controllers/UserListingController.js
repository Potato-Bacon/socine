const express = require("express");
const isAuth = require("../middleware/isAuth");
const UserListings = require("../models/userListingSchema");
const User = require("../models/userSchema");

const router = express.Router();

// get all user listings
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

//new form
router.post("/submit", isAuth, async (req, res) => {
  const newUserListing = req.body;

  await UserListings.create(newUserListing, (error, submission) => {
    if (error) {
      res.status(500).send({ msg: error });
    } else {
      res.status(201).send(submission);
    }
  });
});

//search by location/mrt and filter
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

    if (req.body.interests !== undefined) {
      search.push({ interests: req.body.interests });
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

    const results = await UserListings.find({
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

// router.post("/search/filter", async (req, res) => {
//   console.log(req.query.min, "min value");
//   console.log(req.query.min, "max value");

//   const budget = { budget: { $gte: undefined, $lte: undefined } };
//   console.log(budget.budget, "first");

//   if (req.query.interest !== undefined) {
//     array.push({ interests: req.query.interest });
//   }

//   if (req.query.userListingTag !== undefined) {
//     array.push({ userListingTag: req.query.userListingTag });
//   }

//   if (req.query.min !== undefined) {
//     budget.budget.$gte = req.query.min;
//   } else {
//     delete budget.budget.$gte;
//   }

//   console.log(budget, "after min logic");

//   if (req.query.max !== undefined) {
//     budget.budget.$lte = req.query.max;
//   } else {
//     delete budget.budget.$lte;
//   }
//   console.log(budget, "after max logic");

//   if (budget.budget.$gte === undefined && budget.budget.$lte === undefined) {
//     console.log("no properties found");
//   } else {
//     array.push(budget);
//   }

//   console.log(array);

//   const results = await UserListings.find({
//     $and: array,
//   }).exec();
//   console.log(results.length);
//   res.send(results);
// });

router.post("/recommendations", async (req, res) => {
  const { budget, mrt, town } = req.body;
  try {
    const userListingRecommendations = await UserListings.find({
      $and: [
        { $or: [{ mrt: mrt }, { town: town }] },
        { budget: { $lte: budget } },
      ],
    }).exec();

    res.status(200).send(userListingRecommendations);
  } catch (error) {
    res.status(500).send({ msg: error });
  }

  console.log(budget, mrt, town);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const userListing = await UserListings.findById(id)
    .populate({
      path: "submittedBy",
      select:
        "-password  -createdAt -updatedAt -favUserListing -favRoomListing -getEmail",
    })
    .populate("interests")
    .populate("mbti")
    .exec();

  if (userListing === undefined) {
    res.status(500).send({ error: "Listing not found" });
  } else {
    res.status(200).send(userListing);
  }
});

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const userListing = req.body;
  const updatedListing = await UserListings.findByIdAndUpdate(id, userListing, {
    new: true,
  });
  if (updatedListing === undefined) {
    res.status(500).send({ error: "Listing not found" });
  } else {
    res.status(200).send(updatedListing);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteListing = await UserListings.findByIdAndDelete({ _id: id });
    res.status(200).send(deleteListing);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

//search by submittedBy ObjectID
router.get("/submittedby/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const searchBySubmitted = await UserListings.findOne({
      submittedBy: id,
    });
    res.status(200).send(searchBySubmitted);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
});
module.exports = router;
