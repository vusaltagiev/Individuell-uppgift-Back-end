const express = require("express");
const router = express.Router();
const { 
    getProducts, 
    getProduct, 
    createProducts, 
    uppdateProduct, 
    deletProduct  
} = require("../controllers/productController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getProducts).post(createProducts);
router.route("/:id").get(getProduct).put(uppdateProduct).delete(deletProduct);


module.exports = router; 
