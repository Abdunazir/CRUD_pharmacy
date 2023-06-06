const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stock");

router.get("/", stockController.getAllStock);
router.post("/", stockController.createStock);
router.get("/:id", stockController.getStockById);
router.put("/:id", stockController.updateStockById);
router.delete("/:id", stockController.deleteSrockByid);

module.exports = router;
