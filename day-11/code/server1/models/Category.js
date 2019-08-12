const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },

    // .populate('products.product')
    products: [
        { product: { type: mongoose.Types.ObjectId, ref: 'Product' }}
    ],

    // .populate('products')
    // products: [
    //     { type: mongoose.Types.ObjectId, ref: 'Product' }
    // ]
})

module.exports = mongoose.model('Category', CategorySchema)