import express from 'express'
import {
    getProducts,
    getProductById
} from '../controllers/productController.js'

const router = express.Router()

//get all product
router.route('/').get(getProducts)

//get single product by id
router.route('/:id').get(getProductById)

export default router