// require mongoose
const mongoose = require('mongoose')

// create schema
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
})

//export
module.exports = Connect = mongoose.model('product', productSchema)