import React, { Component } from 'react';
import { Header, Navbar, Footer } from '.'
import { ProductConsumer } from '../ProductContext'
import { Product, Modal } from '.'

class Products extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />

                <div className='container'>
                    <div className='row'>
                        <ProductConsumer >
                            {
                                value => {
                                    return value.products.map(element => {
                                        return <Product key={element.id} product={element} />
                                    })
                                }
                            }
                        </ProductConsumer>
                    </div>
                </div>
                <Modal />
                <Footer />
            </div>
        );
    }
}

export default Products;