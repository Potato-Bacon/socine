const mongoose = require("mongoose");

const mbtiSchema = new mongoose.Schema({
  mbti: { type: String, required: true },
  description: { type: String, required: true },
});

const Mbti = mongoose.model("Mbti", mbtiSchema);

module.exports = Mbti;
