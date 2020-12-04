import { Card, Button, Row, Col } from 'react-bootstrap'
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
                <Card.Header>Experience full functions of this app by logging in as Admin </Card.Header>
                <Card.Body>
                    <Card.Subtitle as='h4'>Log in info:</Card.Subtitle>
                    <Card.Text>Email : Admin@example.com</Card.Text>
                    <Card.Text>Password: 1234</Card.Text>
                    <Card.Text className="text-success">In "Users" page, you could view, delete, edit users as well as mark one as Admin </Card.Text>
                    <Card.Text className="text-success">In "Products" page, you could view, create, edit and delete any product</Card.Text>
                    <Card.Text className="text-success">In "Orders" page, you could view all orders made by users; also you could mark order to 'delivered' at order detail, which will update to user's order condition.  </Card.Text>

                    <Card.Text className="text-danger">* Please only delete products or users created by You</Card.Text>
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