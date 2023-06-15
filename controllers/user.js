// require user model
const User = require('../models/user')

// require bcrypt
const bcrypt = require('bcrypt')

// require jwt
const jwt = require('jsonwebtoken')

// Register
exports.register = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(400).send({ msg: 'Email already used' });
        }
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ ...req.body });
        newUser.password = hashedPassword;
        await newUser.save();

        const token = jwt.sign(
            {
                id: newUser._id,
            },
            process.env.SECRET_KEY
        );

        return res.status(200).send({ msg: 'Register Successfully', newUser, token });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: 'Register failed', error });
    }
};


// Login
exports.login = async (req, res) => {
    try {
        const {email, password} = req.body
        const foundUser = await User.findOne({email})
        if (!foundUser) {
           return  res.status(400).send({errors : [{ msg : "Utilisateur où E-mail non trouvé"}]})
        }
        const checkPassword = await bcrypt.compare(password, foundUser.password)
        
        if (!checkPassword) {
            return res.status(400).send({errors : [{ msg : "Veuillez vérifier votre mot de passe!!"}]})
        }

        const token = jwt.sign({
            id: foundUser._id
        }, process.env.SECRET_KEY)

        res.status(200).send({success : [{msg : "Welcome Back"}] , foundUser , token}) 

    } catch (error) {
        res.status(400).send({errors : [{ msg : "Impossible de trouver l'utilisateur!!"}]}) 
    }
}