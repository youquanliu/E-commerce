import jwt from 'jsonwebtoken'

//GenerateToken
const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    )
}

export default generateToken