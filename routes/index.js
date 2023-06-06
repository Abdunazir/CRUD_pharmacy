const express = require("express");
const router = express.Router(); // localhost:3000/region

const regionRouters = require("./region");
const medicine_typeRouters = require("./medicine_type");
const districtRouters = require("./district");
const stockRouters = require("./stock");
const medicineRouters = require("./medicines");
const pharmaciesRouters = require("./pharmacies");

router.use("/region", regionRouters);
router.use("/medicine_type", medicine_typeRouters);
router.use("/district", districtRouters);
router.use("/stock", stockRouters);
router.use("/medicines", medicineRouters);
router.use("/pharmacies", pharmaciesRouters);

module.exports = router;
