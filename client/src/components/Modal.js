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
                                            <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalizep-5 p-3'>
                                                <h5 className='pb-2 text-capitalize'>đã thêm vào giỏ hàng</h5>
                                                <img src={img} className='img-fluid pb-3' alt='product' />
                                                <h5 className='mb-0'>{title}</h5>
                                                <h5 className='text-muted'>{price}đ</h5>
                                                <Link to='/products'>
                                                    <button className='button-buy' onClick={_ => {
                                                        handleCloseModal()
                                                    }}>
                                                        mua tiếp
                                                    </button>
                                                </Link>
                                                <Link to='/cart'>
                                                    <button className='button-cart'
                                                        onClick={_ => {
                                                            handleCloseModal()
                                                        }}>
                                                        xem giỏ hàng
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