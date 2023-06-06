const express = require("express");
const router = express.Router();
const medicine_typeController = require("../controllers/medicine_type");

router.get("/", medicine_typeController.getAllMedicine_type);
router.post("/", medicine_typeController.createMedicine_type);
router.get("/:id", medicine_typeController.getMedicine_typeById);
router.put("/:id", medicine_typeController.updateMedicine_typeById);
router.delete("/:id", medicine_typeController.deleteMedicine_typeById);

module.exports = router;
