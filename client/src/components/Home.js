import React, { Component } from 'react';
import { Header, Navbar, Slider, Footer } from '.'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <Slider />
                <div className='container-fluid mx-0 py-5 history'>
                    <div className='d-flex text-white justify-content-center'>
                        <div className='pr-5' style={{ width: 'fit-content' }}>
                            <img src='./assets/img-history.webp' alt='img-history' className='rounded-circle' />
                        </div>
                        <div className='py-5 content w-25'>
                            <div>
                                <h3>The History Of Qahwah</h3>
                                <div className='history-content text-justify'>
                                    Qahwah is the Arabic word for coffee originated in the country of Yemen in the 14th century. The term coffee is associated with a rich history filled with adventure, innovation and creativity: beginning with its planting, to its harvesting, and finally its brewing. Yemen was the first source of coffee in the world,  It was form the Port of Mocha in Yemen.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;