const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  packageName: { type: String, required: true },
  testimonialContent: { type: String, required: true },
  customerImage: { type: String },
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
