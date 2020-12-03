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
    },{
        name: 'Jack',
        email: 'Jack@example.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: false
    },{
        name: 'Olivia',
        email: 'Olivia@example.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: false
    },{
        name: 'Sophia',
        email: 'Sophia@example.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: false
    },{
        name: 'Mia',
        email: 'Mia@example.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: false
    },{
        name: 'Tom',
        email: 'Tom@example.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: false
    },
]

export default users