import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addorderItems } from '../controllers/orderController.js'

const router = express.Router()

router.route('/').post(protect, addorderItems)

export default router