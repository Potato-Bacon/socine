const mongoose = require("mongoose");

const roomListingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    profilePic: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    listingPics: { type: String, required: true },
    address: { type: String, required: true },
    town: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Town",
      required: true,
    },
    mrt: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "MRT",
      required: true,
    },
    amenities: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Amenities",
      required: true,
    },
    listingTags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "ListRoomTag",
      required: true,
    },
    wholeUnitOrRoomOnly: { type: String, required: true },
    roomType: String,
    bathroomType: { type: String, required: true },
    genderPreference: { type: String, required: true },
    apartmentType: { type: String, required: true },
    apartmentRoomTypes: String,
    securityDeposit: { type: Number, required: true, min: 0 },
    rentPerMonth: { type: Number, required: true, min: 0 },
    availability: { type: Date, required: true },
    stayLength: { type: String, required: true },
    propertyDescription: { type: String, required: true },
    occupantsDescription: { type: String, required: true },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const RoomListing = mongoose.model("RoomListing", roomListingSchema);

module.exports = RoomListing;
