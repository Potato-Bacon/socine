const mongoose = require("mongoose");

const listRoomTagSchema = new mongoose.Schema({
  tag: { type: String, required: true },
});

const ListRoomTag = mongoose.model("ListRoomTag", listRoomTagSchema);

module.exports = ListRoomTag;
