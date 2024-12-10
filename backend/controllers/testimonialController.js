const Testimonial = require("../model/testimonial");

exports.createTestimonial = async (req, res) => {
  try {
    const newTestimonial = await Testimonial.create(req.body);
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTestimonials = async (req, res) => {
  try {
    const Testimonials = await Testimonial.find();
    res.status(200).json(Testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTestimonial = async (req, res) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Testimonial deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
