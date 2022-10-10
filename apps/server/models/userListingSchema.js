const mongoose = require("mongoose");

const userListingSchema = new mongoose.Schema(
  {
    findRoom: { type: Boolean, required: true },
    occupation: { type: String, required: true },
    roomLocations: { type: String, required: true },
    preferredTown: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Town",
      required: true,
    },
    preferredMrts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Mrt",
      required: true,
    },
    budget: { type: Number, required: true },
    earlyMoveInDate: { type: Date, required: true },
    userListingTag: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "UserListingTag",
      required: true,
    },
    submittedBy: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      required: true,
    },
    status: { type: "Boolean", required: true, default: "active" },
  },
  { timestamps: true }
);

const UserListing = mongoose.model("UserListing", userListingSchema);

module.exports = UserListing;
