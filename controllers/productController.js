const asyncHandler = require("express-async-handler");
// @desc Get all products
// @router GET /api/products
// @access public

const getProducts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all products"})
})

// @desc Get a product
// @router GET /api/products/:id
// @access public

const getProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get a product for ${req.params.id}` })
})


// @desc Create New products
// @router POST /api/products
// @access public

const createProducts = asyncHandler(async (req, res) => {
    console.log("The req body is :", req.body)
    const {Name, Description, Price, ImageURL} = req.body
    if (!Name || !Description || !Price || !ImageURL) {
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
    res.status(201).json({ message: "Greate a product"})
})


// @desc Uppdate a product
// @router PUT /api/products/:id
// @access public

const uppdateProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update a product for ${req.params.id}` })
})


// @desc Delete a product
// @router DELETE /api/products/:id
// @access public

const deletProduct = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete a product for ${req.params.id}` })
})


module.exports = { 
    getProducts, 
    getProduct, 
    createProducts, 
    uppdateProduct, 
    deletProduct }