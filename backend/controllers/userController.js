import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

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
            token: null
        })
    } else {
        res.status(401)
        throw new Error('Invalid email for password')
    }
})

export {
    authUser,
}