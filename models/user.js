// require mongoose
const mongoose = require('mongoose')

// create Schema
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    }, 
    email: {
        type: String,
        require: true,

    },
    password: {
        type: String,
        require: true
    },
    phone : Number
})

// export
module.exports = User = mongoose.model('user', userSchema)