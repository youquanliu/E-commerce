import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetail } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const UserEditScreen = ({ match, history }) => {
    const userId = match.params.id

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetail = useSelector((state) => state.userDetail)
    const { loading, error, user } = userDetail

    useEffect(() => {
        if (!user.name || user._id !== userId) {
            dispatch(getUserDetail(userId))
        } else {
            setName(user.name)
            setEmail(user.email)
            setIsAdmin(user.isAdmin)
        }
    }, [user, dispatch, userId])

    const submitHandler = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <Link to='/admin/userList' className='btn btn-info my-3'>
                Go Back
        </Link>
            <FormContainer>
                <h1>Edit User</h1>
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='isadmin'>
                                <Form.Check
                                    type='checkbox'
                                    label='Is Admin'
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}>
                                </Form.Check>
                            </Form.Group>

                            <Button type='submit' variant='success'>
                                Update
                            </Button>
                        </Form>
                    )}

            </FormContainer>
        </>
    )
}

export default UserEditScreen
