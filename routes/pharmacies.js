const express = require("express");
const router = express.Router();
const pharmaciesController = require("../controllers/pharmacies");

router.get("/", pharmaciesController.getAllPharmacies);
router.get("/:id", pharmaciesController.getPharmaciesById);
router.post("/", pharmaciesController.createPharmacies);
router.put("/:id", pharmaciesController.updatePharmaciesById);
router.delete("/:id", pharmaciesController.deletePharmaciesById);

module.exports = router;
