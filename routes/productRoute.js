// require express
const express = require('express')
const { test, addProduct, getProducts, getProductById, deleteProduct, editProduct } = require('../controllers/product')


// require router from express
const router = express.Router()

//create routes
// test route
router.get('/test', test)

// test 2
router.get('/test2', (req, res)=> {
    try {
        res.send('test2 test2 test2')
    } catch (error) {
        console.log(error)
    }
})

// add new product
router.post('/add_product', addProduct)

//get all products
router.get('/get_products', getProducts)

// get product by id
router.get('/get_one/:_id', getProductById)

// delete product
router.delete('/delete_product/:_id', deleteProduct)

//edit product
router.put('/edit_product/:_id', editProduct)

//export router
module.exports = router 