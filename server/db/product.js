const mongoose = require('mongoose');
const productSchema =new mongoose.Schema({
    "product_name":String,
    "product_price":Number,
    "product_image":String
})

module.exports = mongoose.model('product',productSchema)