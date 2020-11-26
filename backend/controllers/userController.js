import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

//@desc Auth user & get token  
//POST /api/users/login
const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({ email: email })

    //password is in plain text, we need to bcrypt in user Model
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            //Return JWT to Brower as payload
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email for password')
    }
})

//@desc Register a new user 
//POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body
    const userExists = await User.findOne({ email: email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({
        name,
        email,
        password
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


//@desc Get user profile 
//GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('user not found!')
    }
})


export {
    authUser,
    getUserProfile,
    registerUser,
}