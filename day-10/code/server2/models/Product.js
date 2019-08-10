const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true },

    // mobile
    cpu: { type: String, required: false },
    ram: { type: Number, required: false },
    
    // motor
    size: { type: String, required: false }
})

module.exports = mongoose.model('Product', ProductSchema)