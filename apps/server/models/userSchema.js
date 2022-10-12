const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: Number,
    favUserListing: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "UserListing",
    },
    favRoomListing: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "RoomListing",
    },

    getEmail: { type: Boolean, required: true, default: false },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
