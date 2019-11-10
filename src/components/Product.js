import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ProductConsumer } from '../context'

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <div className='col-9 mx-auto col-md-6 col-lg-4 my-3'>
        <div className='card'>
          <ProductConsumer>
            {
              value => {
                return (
                  <div className='img-container p-5' onClick={() => value.handleDetail(id)}>
                    <Link to='/detail'>
                      <img src={img} alt='product' className='card-img-top' />
                    </Link>
                    <button
                      className='cart-btn'
                      disabled={inCart}
                      onClick={() => {
                        value.handleAddToCart(id)
                        value.handleOpenModal(id)
                      }}>
                      {
                        inCart
                          ? <p className='text-capitalize mb-0' disabled>{' '}in inCart</p>
                          : <i className='fas fa-cart-plus' />
                      }
                    </button>
                  </div>
                )
              }
            }
          </ProductConsumer>
          <div className='card-footer font-weight-bold'>
            <p className='align-self-center mb-0'>
              {title}
            </p>
            <h5 className='text-blue font-italic mb-0'>
              {price}
              <span className='mr-1'>đ</span>

            </h5>
          </div>
        </div>
      </div>
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
