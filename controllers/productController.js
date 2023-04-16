const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel")
// @desc Get all products
// @route GET /api/products
// @access private
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({ user_id: req.user.id });
    res.status(200).json(products);
});


// @desc Create New products
// @route POST /api/products
// @access private
const createProducts = asyncHandler(async (req, res) => {
    console.log("The req body is :", req.body)
    const {name, description, price, ImageURL} = req.body;
    if (!name || !description || !price || !ImageURL) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const product = await Product.create({
        name,
        description,
        price,
        ImageURL,
        user_id: req.user.id,
    })
    res.status(201).json(product);
})

// @desc Get a product
// @router GET /api/products/:id
// @access private
const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    res.status(200).json(product)
});

// @desc Uppdate a product
// @router PUT /api/products/:id
// @access private
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }

    if (product.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have premission to update other user product")
    }

const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
);

    res.status(200).json(updatedProduct)
})


// @desc Delete a product
// @router DELETE /api/products/:id
// @access private
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    if (product.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have premission to update other user product")
    }
    await Product.deleteOne({_id: req.params.id })
    res.status(200).json(product)
})


module.exports = { 
    getProducts, 
    createProducts, 
    getProduct, 
    updateProduct, 
    deleteProduct,
};