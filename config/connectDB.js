// require mongoose
const mongoose = require('mongoose')

// connact function
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('Connected to Database successfully !')
    } catch (error) {
        console.log(error)
    }
}
// export
module.exports = connect