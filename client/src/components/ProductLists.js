import React, { Component } from 'react';
import { ProductConsumer } from '../ProductContext'
import { Product, Modal } from '.'

class ProductLists extends Component {
    render() {
        return (

            <div className='container-fluid'>
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
                <Modal />
            </div>
        );
    }
}

export default ProductLists;