import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

class Header extends Component {
    handleLogoutAccount = event => {
        event.preventDefault()
        localStorage.setItem('username', '')
        localStorage.setItem('fullName', '')
        window.location = '/'
    }

    render() {
        let fullName = localStorage.getItem('fullName')

        return (
            <nav className='navbar navbar-expand-sm navbar-dark px-sm-5 shadow-sm static-top bg-primary'>
                <div className="container">
                    <div className="col-md-4">
                        left content
                    </div>

                    {
                        fullName
                            ? <div className='col-md-4 text-right px-0'>
                                <div className="username">
                                    Hello {fullName}
                                    <div className="text-warning font-italic logout" onClick={this.handleLogoutAccount}>(logout)</div>
                                </div>
                            </div>
                            : <div className='col-md-4 text-right px-0'>
                                <Link to="/login">
                                    <button type="button" className="btn btn-success">Login</button>
                                </Link>
                                <Link to="/register" >
                                    <button type="button" className="btn btn-warning ml-1">Register</button>
                                </Link>
                            </div>
                    }
                </div>
            </nav>
        );
    }
}

export default Header;