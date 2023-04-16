const express = require("express");
const router = express.Router();
const { 
    getProducts, 
    createProducts, 
    getProduct, 
    updateProduct, 
    deleteProduct, 
} = require("../controllers/productController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getProducts).post(createProducts);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router; 