const mongoose = require("mongoose");

const userListingSchema = new mongoose.Schema(
  {
    findRoom: { type: Boolean, required: true },
    occupation: { type: String, required: true },
    preferredTown: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Town",
        required: true,
      },
    ],

    preferredMrts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mrt",
        required: true,
      },
    ],
    budget: { type: Number, required: true },
    earlyMoveInDate: { type: Date, required: true },
    userListingTag: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserListingTag",
        required: true,
      },
    ],
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      autopopulate: {
        select: "-password -username -email",
      },
    },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

userListingSchema.plugin(require("mongoose-autopopulate"));

const UserListing = mongoose.model("UserListing", userListingSchema);

module.exports = UserListing;
