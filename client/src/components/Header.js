import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { ProductConsumer } from '../ProductContext'

class Header extends Component {
    handleLogoutAccount = event => {
        event.preventDefault()
        localStorage.setItem('accessToken', '')
        window.location = '/'
    }

    render() {
        return (
            <ProductConsumer>
                {value => {
                    return (
                        <nav className='navbar navbar-expand-sm navbar-dark shadow-sm bg-white p-0 bottom-element'>
                            <div className="container-fluid">
                                <div className='col-md-4 text-left py-1'>
                                    <div className='social d-flex'>
                                        <div className='text-social pr-1'>Kết nối</div>
                                        <a href='https://www.facebook.com/vanthieu.nguyen.771' target='_blank' className='pr-1'>
                                            {/* <i class="fab fa-facebook-f"></i> */}
                                            <img src='./assets/icons/logo-facebook.svg' className='facebook' alt='facebook' />

                                        </a>
                                        <a href='https://www.instagram.com/thieulatui/' target='_blank' className='pr-1'>
                                            {/* <i class="fab fa-instagram"></i> */}
                                            <img src='./assets/icons/logo-instagram.png' className='instagram' alt='instagram' />
                                        </a>
                                    </div>
                                </div>
                                {
                                    value.user && value.user.fullName
                                        ? <div className='col-md-4 text-right py-1'>
                                            <div className="user-info">
                                                Xin chào, {value.user.fullName}
                                                <span className="text-warning font-italic logout" onClick={this.handleLogoutAccount}>(Đăng xuất)</span>
                                            </div>
                                        </div>
                                        : <div className='col-md-4 text-right py-1'>
                                            <Link to="/login">
                                                <span className="btn-login">Đăng Nhập</span>
                                            </Link>
                                            <Link to="/register" >
                                                <span className="btn-register">Đăng Ký</span>
                                            </Link>
                                        </div>
                                }

                            </div>
                        </nav >
                    )
                }
                }
            </ProductConsumer >
        );
    }
}

export default Header;