const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicines");

router.get("/", medicineController.getAllMedicines);
router.get("/:id", medicineController.getMedicinesById);
router.post("/", medicineController.createMedicine);
router.put("/:id", medicineController.updateMedicineById);
router.delete("/:id", medicineController.deleteMedicineById);
router.post("/:name", medicineController.getInfoByName);

module.exports = router;
