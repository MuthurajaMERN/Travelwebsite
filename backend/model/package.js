const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  packageName: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  fromLocation: { type: String, required: true },
  toLocation: { type: String, required: true },
  price: { type: Number, required: true },
  offerTimeline: { type: String },
});

module.exports = mongoose.model("Package", packageSchema);
