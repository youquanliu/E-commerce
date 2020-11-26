import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

//@desc Fetch all products  
//GET /api/products
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

//@desc Fetch products by ID  
//GET /api/products/:id
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export {
    getProducts,
    getProductById
}