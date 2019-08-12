const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    rating: { type: Number, required: true, trim: true }
})

module.exports = mongoose.model('Product', ProductSchema)