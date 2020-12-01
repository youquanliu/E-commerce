import express from 'express'
const router = express.Router()
import {
    getProducts,
    getProductById,
    deleteProduct
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


//get all product
router.route('/').get(getProducts)

//get single product by id
//delete product by Admin
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router