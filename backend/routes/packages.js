const express = require("express");
const { createPackage, getPackages, updatePackage, deletePackage } = require("../controllers/packageContoller");
const router = express.Router();

router.post("/",createPackage);
router.get("/", getPackages);
router.put("/:id", updatePackage);
router.delete("/:id", deletePackage);

module.exports = router;
