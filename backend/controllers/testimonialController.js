const Tesimonial = require("../model/testimonial");

exports.createTesimonial = async (req, res) => {
  try {
    const newTesimonial = await Tesimonial.create(req.body);
    res.status(201).json(newTesimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTesimonials = async (req, res) => {
  try {
    const Tesimonials = await Tesimonial.find();
    res.status(200).json(Tesimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTesimonial = async (req, res) => {
  try {
    const updatedTesimonial = await Tesimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTesimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTesimonial = async (req, res) => {
  try {
    await Tesimonial.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Tesimonial deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
