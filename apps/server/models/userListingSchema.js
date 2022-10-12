const mongoose = require("mongoose");

const userListingSchema = new mongoose.Schema(
  {
    profilePicture: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    occupation: { type: String, required: true },
    mbti: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mbti",
      required: true,
      autopopulate: true,
    },
    interests: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Interest",
      required: true,
      autopopulate: true,
    },
    town: { type: String, required: true },
    mrt: { type: String, required: true },
    budget: { type: Number, required: true },
    earlyMoveInDate: { type: Date, required: true },
    userListingTag: { type: [String], required: true },
    description: {
      type: String,
      minLength: 40,
      maxLength: 600,
      required: true,
    },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

userListingSchema.plugin(require("mongoose-autopopulate"));

const UserListing = mongoose.model("UserListing", userListingSchema);

module.exports = UserListing;
