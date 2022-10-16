const mongoose = require("mongoose");

const roomListingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    listingPic: { type: String, required: true },
    address: { type: String, required: true },
    town: { type: String, required: true },
    mrt: { type: String, required: true },
    amenities: { type: [String], required: true },
    listingTags: { type: [String], required: true },
    wholeUnitOrRoomOnly: { type: String, required: true },
    roomType: String,
    bathroomType: { type: String, required: true },
    genderPreference: { type: String, required: true },
    apartmentType: { type: String, required: true },
    apartmentRoomTypes: { type: String, required: true },
    securityDeposit: { type: Number, required: true, min: 0 },
    rentPerMonth: { type: Number, required: true, min: 0 },
    availability: { type: Date, required: true },
    stayLength: { type: String, required: true },
    propertyDescription: { type: String, required: true },
    occupantsDescription: { type: String, required: true },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const RoomListing = mongoose.model("RoomListing", roomListingSchema);

module.exports = RoomListing;
