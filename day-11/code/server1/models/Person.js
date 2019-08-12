const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    gender : { type: String, required: true, trim: true },
    name: {
        title: { type: String, required: true, trim: true },
        first: { type: String, required: true, trim: true },
        last: { type: String, required: true, trim: true },
    },
    location: {
        state: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        street: { type: String, required: true, trim: true },
    },
    email : { type: String, required: true, trim: true },
    phone : { type: String, required: true, trim: true },
    cell : { type: String, required: true, trim: true },
})

module.exports = mongoose.model('Person', PersonSchema)