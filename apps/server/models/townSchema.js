const mongoose = require("mongoose");

const townSchema = new mongoose.Schema({
  location: { type: String, required: true },
  region: { type: String, required: true },
});

const Town = mongoose.model("Town", townSchema);

module.exports = Town;
