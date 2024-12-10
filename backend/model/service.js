const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  details: { type: String, required: true },
});

module.exports = mongoose.model("Service", serviceSchema);
