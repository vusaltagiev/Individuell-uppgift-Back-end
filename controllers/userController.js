const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// @desc Register a user 
// @router POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    const userAvailble = await User.findOne({email});
    if (userAvailble) {
        res.status(400)
        throw new Error("User already registered!")
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed PAssword: ", hashedPassword)
    res.json({ message: "Register the user"});
});


// @desc Login user 
// @router POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login user"})
});


// @desc Current user info
// @router GET /api/users/current
// @access private
const currentUser = asyncHandler(async(req, res) => {
    res.json({ message: "Current user information"})
});

module.exports = { registerUser, loginUser, currentUser }