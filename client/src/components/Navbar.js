import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-dark bg-white shadow-sm nav-header'>
                <div className='container-fluid d-flex py-2 justify-content-between'>
                    <div className='nav-left d-flex justify-content-start'>
                        <Link className='navbar-brand nav-link p-0' to='/' >
                            <img src={'./assets/logo.png'} alt='store' className='navbar-brand logo' />
                        </Link>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-1 seach-box" type="search" placeholder="Nhập tên sản phẩm" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                        </form>
                    </div>
                    <div className='nav-right'>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <div className='menu-top ml-auto pr-2'>
                                <ul className='navbar-nav align-items-bottom'>
                                    <li className='nav-item ml-1 menu-item'>
                                        <Link to='/' className='nav-link menu-item'>
                                            trang chủ
                                    </Link>
                                    </li>
                                    <li className='nav-item ml-1'>
                                        <Link to='/' className='nav-link menu-item'>
                                            giới thiệu
                                    </Link>
                                    </li>
                                    <li className='nav-item ml-1'>
                                        <Link to='/products' className='nav-link menu-item'>
                                            sản phẩm
                                    </Link>
                                    </li>
                                    <li className='nav-item ml-1'>
                                        <Link to='/' className='nav-link menu-item'>
                                            sứ mệnh
                                    </Link>
                                    </li>
                                    <li className='nav-item ml-1'>
                                        <Link to='/' className='nav-link menu-item'>
                                            liên hệ
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                            <Link to='/cart' className='pr-2'>
                                <button className='shopping-cart'>
                                    <i className="fas fa-shopping-cart" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar
