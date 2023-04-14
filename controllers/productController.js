const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel")
// @desc Get all products
// @router GET /api/products
// @access public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products)
})

// @desc Get a product
// @router GET /api/products/:id
// @access public
const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    res.status(200).json(product)
});


// @desc Create New products
// @router POST /api/products
// @access public
const createProducts = asyncHandler(async (req, res) => {
    console.log("The req body is :", req.body)
    const {name, description, price, ImageURL} = req.body
    if (!name || !description || !price || !ImageURL) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const product = await Product.create({
        name,
        description,
        price,
        ImageURL,
    })
    res.status(201).json(product)
})


// @desc Uppdate a product
// @router PUT /api/products/:id
// @access public
const uppdateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
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
// @access public
const deletProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    await Product.remove()
    res.status(200).json(product)
})


module.exports = { 
    getProducts, 
    getProduct, 
    createProducts, 
    uppdateProduct, 
    deletProduct }