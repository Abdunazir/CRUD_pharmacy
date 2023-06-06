const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region");

router.get("/", regionController.getAllRegion);
router.post("/", regionController.createRegion);
router.get("/:id", regionController.getRegionById);
router.put("/:id", regionController.updateRegionById);
router.delete("/:id", regionController.deleteRegionById);

module.exports = router;
