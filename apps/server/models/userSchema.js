const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    profilePicture: String,
    mbti: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mbti",
    },
    favUserListing: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "UserListing",
    },
    favRoomListing: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "RoomListing",
    },
    interest: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Interest",
    },
    updatedProfile: { type: Boolean, required: true, default: false },
    getEmail: { type: Boolean, required: true, default: false },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
