import React, { Component, Fragment } from 'react';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { ProductConsumer } from '../../context'
import { Header, Navbar, Footer } from '..';

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Navbar />
        <section>
          <ProductConsumer>
            {
              value => {
                const { cart } = value;
                if (cart.length > 0) {
                  return (
                    <React.Fragment>
                      <CartColumns />
                      <CartList value={value} />
                      <CartTotals value={value} history={this.props.history} />
                    </React.Fragment>
                  )
                } else {
                  return (
                    <EmptyCart />
                  )
                }
              }
            }
          </ProductConsumer>
        </section>
        <Footer />
      </Fragment>
    )
  }
}

export default Cart;
