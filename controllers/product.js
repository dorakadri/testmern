// require schema
const Product = require('../models/product')

// test route
exports.test = async (req, res) => {
    try {
        res.send('Hello ! test test')
    } catch (error) {
        console.log(error)
    }
}

// add product
exports.addProduct = async (req, res) => {
    try {
        const {name, price, description} = req.body
        const newProduct = new Product({name, price, description})
        await newProduct.save()
        res.status(200).send({msg: 'Product added successfully', newProduct})
    } catch (error) {
        res.status(400).send({msg: 'error in adding new product', error})
    }
}

// get all products
exports.getProducts = async (req, res) => {
    try {
        const Products = await Product.find()
        res.status(200).send(Products)
    } catch (error) {
        res.status(400).send({msg: 'error with getting products', error})
    }
}

// get product by id
exports.getProductById = async (req, res) => {
    try {
        const {_id} = req.params
        const product = await Product.findById({_id})
        if (!product) {
            res.status(400).send({msg: 'Product not found', error})
        }
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({msg: 'error with getting product by id', error})
    }
}

// delete product
exports.deleteProduct = async (req, res) => {
    try {
        const {_id} = req.params
        await Product.findByIdAndDelete({_id})
        res.status(200).send('Product deleted successfully')
    } catch (error) {
        res.status(400).send({msg: 'Cannot delete this product', error})
    }
}

// edit product
exports.editProduct = async (req, res) => {
    try {
        const {_id} = req.params
        const newProduct = req.body
        await Product.updateOne({_id}, {$set: newProduct})
        res.status(200).send({msg: 'Product updated successfully !', newProduct})
    } catch (error) {
        res.status(400).send({msg: 'Cannot edit this product', error})
    }
}