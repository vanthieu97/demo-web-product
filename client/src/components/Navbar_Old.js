import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-dark bg-white px-sm-5 shadow-sm static-top'>
                <div className="container">
                    <Link className='navbar-brand nav-link' to='/' >
                        <img src={'./assets/loading_logo.jpg'} alt='store' className='navbar-brand logo' />
                        Loading
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <div className='menu-top  ml-auto'>
                            <ul className='navbar-nav align-items-bottom'>
                                <li className='nav-item ml-3'>
                                    <Link to='/' className='nav-link'>
                                        trang chủ
                                    </Link>
                                </li>
                                <li className='nav-item ml-3'>
                                    <Link to='/' className='nav-link'>
                                        giới thiệu
                                    </Link>
                                </li>
                                <li className='nav-item ml-3'>
                                    <Link to='/products' className='nav-link'>
                                        sản phẩm
                                    </Link>
                                </li>
                                <li className='nav-item ml-3'>
                                    <Link to='/' className='nav-link'>
                                        sứ mệnh
                                    </Link>
                                </li>
                                <li className='nav-item ml-3'>
                                    <Link to='/' className='nav-link'>
                                        liên hệ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='social-network ml-3'>
                            <ul className='navbar-nav align-items-bottom'>
                                <li className='nav-item ml-1'>
                                    <a href='https://www.facebook.com/vanthieu.nguyen.771' className='facebook'>
                                        <img src='./assets/icons/facebook.webp' alt='facebook' />
                                    </a>
                                </li>
                                <li className='nav-item ml-1'>
                                    <a href='https://www.instagram.com/thieulatui/' className='instagram'>
                                        <img src='./assets/icons/instagram.webp' alt='instagram' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <Link to='/cart' className='ml-auto'>
                    <Button>
                        <span className='mr-2'>
                            <i className='fas fa-cart-plus' />
                        </span>
                        My Cart
          </Button>
                </Link> */}
                </div>
                <Link to='/cart'>
                    <button className='shopping-cart'>
                        <i className="fas fa-shopping-cart" />
                    </button>
                </Link>
            </nav>
        );
    }
}

export default Navbar
