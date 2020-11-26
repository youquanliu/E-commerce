import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'Admin@example.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true
    }, {
        name: 'Frank',
        email: 'Frank.liu@example.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: false
    }, {
        name: 'John Doe',
        email: 'John.doe@example.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: false
    },
]

export default users