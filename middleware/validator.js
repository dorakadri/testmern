const { check, validationResult } = require("express-validator");


exports.registerValidation = () => [
    check('name', 'Name is required !!').not().Empty(),
    check('email', 'Enter a valid email !!').isEmail(),
    check('passeword', 'Enter a valid passeword!!').isLength({min : 6}),
    check('phone', 'Enter a valid phone !!').not().Empty(),

]
    exports.registerValidation = () => [
    
    check('email', 'this field is required !').notEmpty(),
    check('password', 'this field should be at least 4 carac!').isLength({min : 4}),
]

exports.validator = (req, res, next) => {
    const errors = validationResult(req);
    errors.isEmpty() ? next() : res.status(400).send(errors.array())
}