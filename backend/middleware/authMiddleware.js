import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req, res, next) => {
    let token
    if (
        req.headers.authorization
        && req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            //req.headers.authorization come with 'Bearer ****token***'
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //select('-'): exclude password, include other fields
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not Authorized, no token')
    }
})

export { protect }