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
                        <nav className='navbar navbar-expand-sm navbar-dark px-sm-5 shadow-sm static-top bg-primary'>
                            <div className="container">
                                <div className="col-md-4">
                                    left content
                    </div>
                                {
                                    value.user && value.user.fullName
                                        ? <div className='col-md-4 text-right px-0'>
                                            <div className="username">
                                                Xin chào, {value.user.fullName}
                                                <div className="text-warning font-italic logout" onClick={this.handleLogoutAccount}>(Đăng xuất)</div>
                                            </div>
                                        </div>
                                        : <div className='col-md-4 text-right px-0'>
                                            <Link to="/login">
                                                <button type="button" className="btn btn-success z">Đăng Nhập</button>
                                            </Link>
                                            <Link to="/register" >
                                                <button type="button" className="btn btn-warning ml-1 text-white">Đăng Ký</button>
                                            </Link>
                                        </div>
                                }

                            </div>
                        </nav>
                    )
                }
                }
            </ProductConsumer>
        );
    }
}

export default Header;