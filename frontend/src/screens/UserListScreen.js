import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers, deleteUsers } from '../actions/userActions'

const UserListScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete } = userDelete

    //prevent regular user access admin screen
    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, successDelete, userInfo])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUsers(id))
        }
    }

    return (
        <>
            <h1>Users</h1>
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                            <Table striped responsive className='table-lg table-hover'>
                                <thead>
                                    <tr className="table-success">
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>ADMIN</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {console.log('%c Users: ', 'color:orange; font-wight:bold; font-size:20px')}
                                    {console.table(users)}
                                    {users.map((user) => (
                                        <tr key={user._id} className="table-light">
                                            <td>{user._id}</td>
                                            <td>{user.name}</td>
                                            <td>
                                                <a href={`mailto:${user.email}`}>{user.email}</a>
                                            </td>
                                            <td>
                                                {user.isAdmin ? (
                                                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                                                ) : (
                                                        <i className='fas fa-times' style={{ color: 'red' }}></i>
                                                    )}
                                            </td>
                                            <td>
                                                <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                                    <Button variant='light' className='btn-sm mr-2'>
                                                        <i className='fas fa-edit'></i>
                                                    </Button>
                                                </LinkContainer>
                                                <Button
                                                    variant='danger'
                                                    className='btn-sm'
                                                    onClick={() => deleteHandler(user._id)}
                                                >
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )
            }
        </>
    )
}

export default UserListScreen