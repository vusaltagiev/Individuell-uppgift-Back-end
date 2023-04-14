const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        requireed: [true, "Please add the user name"],
    },
    email: {
        type: String,
        requireed: [true, "Please add the user email address"],
        unique: [true, "Email adress alredy taken"],
    },
    password: {
        type: String,
        requireed: [true, "Please add the user password"],
    }
},  {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema)