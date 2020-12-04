import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const AdminIndfoScreen = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <>
            <Card>
                <Card.Header>Hello World !</Card.Header>
                <Card.Body>
                    <Card.Title as="h1">Experience full functions of this app by logging in as Admin </Card.Title>
                    <Card.Text>
                        Email : Admin@example.com</Card.Text>
                    <Card.Text>Password: 1234</Card.Text>
                    <Card.Text className="text-danger">Please only delete products or users created by You</Card.Text>
                    <Button variant="info" onClick={logoutHandler} >
                        <Link to='/login' className='btn-sm btn-info'>
                            Go log-in
                    </Link>
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default AdminIndfoScreen