const mongoose = require("mongoose");

const amenitiesSchema = new mongoose.Schema({
  amenities: { type: String, required: true },
});

const Amenities = mongoose.model("Amenities", amenitiesSchema);

module.exports = Amenities;
