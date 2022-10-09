const mongoose = require("mongoose");

const userListingTagSchema = new mongoose.Schema({
  tag: { type: String, required: true },
});

const UserListingTag = mongoose.model("UserListingTag", userListingTagSchema);

module.exports = UserListingTag;
