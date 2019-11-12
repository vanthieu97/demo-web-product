import React, { Component } from 'react';
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {
                            modalOpen,
                            handleCloseModal,
                            modalProduct: { img, title, price }
                        } = value
                        if (!modalOpen) {
                            return null
                        } else {
                            return (
                                <div className='modal'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                                                <h5>item added to the cart</h5>
                                                <img src={img} className='img-fluid' alt='product' />
                                                <h5>{title}</h5>
                                                <h5 className='text-muted'>{price}đ</h5>
                                                <Link to='/products'>
                                                    <button className='button-modal' onClick={_ => {
                                                        handleCloseModal()
                                                    }}>
                                                        continue shopping
                                                    </button>
                                                </Link>
                                                <Link to='/cart'>
                                                    <button className='button-modal'
                                                        onClick={_ => {
                                                            handleCloseModal()
                                                        }}>
                                                        go to cart
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                }
            </ProductConsumer>
        )
    }
}