import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
    return (
        <Spinner animation='border' role='status' style={{
            width: '170px',
            heigth: '150px',
            margin: 'auto',
            display: 'block'
        }}>
            <span className='st-only'>I am a cool Loader...</span>
        </Spinner>
    )
}

export default Loader
