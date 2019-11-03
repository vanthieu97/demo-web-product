import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small pt-4">
                <div className="container-fluid text-center text-md-left">
                    <Link className='navbar-brand nav-link link-logo' to='/' >
                        <img src={'./assets/loading_logo.jpg'} alt='store' className='navbar-brand footer-logo' />
                    </Link>
                </div>

                <div className="footer-copyright text-center py-3">Design by:
    <a href="mailto:vanthieunguyen234@gmail.com"> vanthieunguyen234@gmail.com</a>
                </div>
            </footer>
        );
    }
}

export default Footer;