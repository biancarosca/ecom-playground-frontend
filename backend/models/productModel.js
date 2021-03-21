const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price:{
        type: Number,
        required: true,
    },
    image: {
        type: Buffer,
    }
},{timestamps: true})

const Product = new mongoose.model("Product",productSchema);

module.exports = Product;