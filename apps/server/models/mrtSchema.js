const mongoose = require("mongoose");

const mrtSchema = new mongoose.Schema({
  station: { type: String, required: true },
});

const Mrt = mongoose.model("Mrt", mrtSchema);

module.exports = Mrt;
