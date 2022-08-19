const { Router } = require("express");
const productController = require("../Controllers/product");
const authController = require("../Middleware/Authentication");
const router = Router();

//Get all products
router.get('/get-all-products', authController.verifyToken, authController.verifyUsertype, productController.getProducts)

module.exports = router;
