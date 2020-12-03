import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'
import Meta from '../components/Meta'

const HomeScreen = ({ match }) => {

    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)

    const { loading, error, products, page, pages } = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <>
            <Meta />
            {!keyword ? (
                <ProductCarousel />
            ) : (
                    <Link to='/' className='btn btn-info'>
                        Go Back
                    </Link>
                )}
            <h1>latest Products</h1>
            {loading
                ? (<Loader></Loader>)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (<>
                        <Row>
                            {console.log('%c Products List:', 'color:orange; font-wight:bold; font-size:20px')}
                            {console.table(products)}
                            {products.map((product) => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate
                            pages={pages}
                            page={page}
                            keyword={keyword ? keyword : ''}
                        />
                    </>
                    )
            }

        </>
    )
}

export default HomeScreen
