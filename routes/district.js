const express = require("express");
const router = express.Router();
const districtController = require("../controllers/district");

router.get("/", districtController.getAllDistrict);
router.post("/", districtController.createDistrict);
router.get("/:id", districtController.getDistrictById);
router.put("/:id", districtController.updateDistrictById);
router.delete("/:id", districtController.deleteDistrictById);

module.exports = router;
