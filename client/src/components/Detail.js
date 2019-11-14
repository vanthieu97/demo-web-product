import React, { Component } from 'react';
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const { id, company, img, info, price, title, inCart } = value.details
                        return (
                            <div className='container py-5'>
                                <div className='row'>
                                    <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                        <h1>{title}</h1>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-10 mx-auto col-md-6 my-3'>
                                        <img src={img} className='img fluid' alt='product' />
                                    </div>
                                    <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                        <h2>model: {title}</h2>
                                        <h4 className='text-fifle text-uppercase text-muted mt-3 mb-2'>
                                            made by: <span className='text-uppercase'>
                                                {company}
                                            </span>
                                        </h4>
                                        <h4 className='text-blue'>
                                            <strong>
                                                price: <span>$</span>
                                                {price}
                                            </strong>
                                        </h4>
                                        <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                            some info about product:
                    </p>
                                        <p className='text-muted text-justify lead'>{info}</p>
                                    </div>
                                    <Link to='/'>
                                        <button className='cart-btn'>back to products</button>
                                    </Link>
                                    <button className='cart-btn'
                                        disabled={inCart}
                                        onClick={() => {
                                            value.handleAddToCart(id)
                                            value.handleOpenModal(id)
                                        }}
                                    >
                                        {
                                            inCart ? 'inCart' : 'add to cart'
                                        }
                                    </button>
                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}

export default Detail;
