// routes/pembelianRoutes.js
const express = require("express");
const pembelianController = require("../controllers/pembelianController");

const router = express.Router();

// Endpoint untuk melakukan pembelian
router.post("/checkout", pembelianController.createPurchase);

module.exports = router;
