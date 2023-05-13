const mongoose = require('mongoose');
const categorySchema =new mongoose.Schema({
    "category_name":String,
    "created_at":Date,
    "updated_at":Date
})

module.exports = mongoose.model('category',categorySchema)