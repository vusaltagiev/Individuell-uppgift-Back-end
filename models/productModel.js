const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Pleas add the product name"],
    },
    description: {
        type: String,
        required: [true, "Please add the description of the product"],
    },
    price: {
        type: String,
        required: [true, "Please add the price of the product"],
    },
    ImageURL: {
        type: String,
        required: [true, "Please add the URL for the product"],
    },
},  {
      timestamps: true,
    }
);

module.exports = mongoose.model("Product", productSchema);