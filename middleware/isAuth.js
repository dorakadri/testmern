const jwt = require("jsonwebtoken")

const User = require('../models/user')

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers['authorization']
        if (!token) {
            res.status(400).send({msg: 'Not authorized 1'})
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        const foundUser = await User.findOne({_id: decoded.id})
        if (!foundUser){
            res.status(400).send({msg: 'Not authorized 2'})
        }
        req.user = foundUser
        next()
        
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = isAuth