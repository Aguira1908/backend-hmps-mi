const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authenticateToken = require("../middleware/authMiddleware");

// Routes
router.get("/", productController.getAllProducts);
router.get("/:nama", productController.getProductById);
// router.post("/", authenticateToken, productController.createProduct);
// router.put("/:id", authenticateToken, productController.updateProduct);
// router.delete("/:id", authenticateToken, productController.deleteProduct);

module.exports = router;
