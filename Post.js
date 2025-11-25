const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: "Anonymous" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", postSchema);
