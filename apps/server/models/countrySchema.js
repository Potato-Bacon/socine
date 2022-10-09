const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  countryName: { type: String, required: true },
  countryCode: { type: String, required: true },
  nationality: { type: String, required: true },
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
