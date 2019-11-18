import React, { Component } from 'react';
import { Header, Navbar, Footer, ProductLists } from '.'
import { ProductConsumer } from '../ProductContext'
import { Product, Modal } from '.'

class Products extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <ProductLists />
                <Footer />
            </div>
        );
    }
}

export default Products;