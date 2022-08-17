const { Router } = require("express");
const router = Router();
const categoryController = require('../Controllers/category');
const auth = require('../Middleware/Authentication')

//Create a new category
router.post('/add-category', auth.verifyToken, auth.verifyUsertype, categoryController.createCategory);

//Get all category
router.get('/get-categories', auth.verifyToken, auth.verifyUsertype, categoryController.getCategories);

module.exports = router;
