const express = require("express");
const { createTestimonial, getTestimonials, updateTestimonial, deleteTestimonial } = require("../controllers/testimonialController");
const router = express.Router();

router.post("/", createTestimonial);
router.get("/", getTestimonials);
router.put("/:id", updateTestimonial);
router.delete("/:id", deleteTestimonial);

module.exports = router;
