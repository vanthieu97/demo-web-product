import React, { Component } from 'react';
import { Header, Navbar, Slider, Footer } from '.'
import ProductLists from './ProductLists';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <Slider />
                <ProductLists />
                <Footer />
            </div>
        );
    }
}

export default Home;