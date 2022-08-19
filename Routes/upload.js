const { Router } = require("express");
const productController = require("../Controllers/product");
const authController = require("../Middleware/Authentication");
const router = Router();

//Upload to cloudinary
router.post('/upload-docs', authController.verifyToken, authController.verifyUsertype, productController.uploadPictureToCloudinary)

//Save cloudinary response to db
router.post('/my-docs', authController.verifyToken, authController.verifyUsertype, productController.createProduct)

module.exports = router;
