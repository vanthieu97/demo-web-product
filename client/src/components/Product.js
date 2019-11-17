import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ProductConsumer } from '../ProductContext'

class Product extends Component {
    render() {
        const { id, title, img, price, inCart, info, url } = this.props.product
        return (
            <ProductConsumer>
                {
                    value => {
                        return (
                            <div className='mx-auto col-md-6 col-lg-4 my-3'>
                                <div className='card'>
                                    <div className='img-container position-relative' onClick={() => value.handleDetail(id)}>
                                        <Link to={`/${url}`}>
                                            <img
                                                src={img}
                                                alt='product'
                                                className='card-img-top' />
                                        </Link>
                                        <p id={`discribe-${id}`} className='product-info'>{info.slice(0, 150)}...
                                        <Link to='/detail'><span className=''>đọc tiếp</span></Link></p>
                                    </div>
                                    <div className='card-footer'>
                                        <div className='d-flex justify-content-between'>
                                            <p className='align-self-center mb-0'>
                                                {title}
                                            </p>
                                            <p className='text-danger align-self-center mb-0'>
                                                {price}đ</p>
                                        </div>
                                        {
                                            inCart
                                                ? <Link to='/cart'>
                                                    <button
                                                        className='btn-go-to-cart'>xem giỏ hàng</button>
                                                </Link>
                                                : <button
                                                    onClick={() => {
                                                        value.handleAddToCart(id)
                                                        value.handleOpenModal(id)
                                                    }}
                                                    className='btn-add-cart'>
                                                    <i className='fas fa-cart-plus'><span className='ml-1'>thêm vào giỏ</span></i>
                                                </button>
                                        }
                                    </div>

                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer >
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

export default Product;
