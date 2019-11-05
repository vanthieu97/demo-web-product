import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import axios from 'axios'
import Popup from "reactjs-popup"

class Login extends Component {
    constructor(props) {
        super(props)
    }


    handleClickSignUp() {
        window.location = '/register'
    }

    render() {
        return (
            <div>
                <div id="logreg-forms">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }} > Sign in</h1>
                        <div className="social-login">
                            <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                            <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
                        </div>
                        <p style={{ textAlign: 'center' }}> OR  </p>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" />
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />

                        <button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt"></i> Sign in</button>
                        <a href="#" id="forgot_pswd">Forgot password?</a>
                        <hr />

                        <button className="btn btn-primary btn-block" type="button" id="btn-signup" onClick={this.handleClickSignUp}><i className="fas fa-user-plus"></i> Sign up New Account</button>
                    </form>

                    <form action="/reset/password/" className="form-reset">
                        <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required="" />
                        <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                        <a href="#" id="cancel_reset"><i className="fas fa-angle-left"></i> Back</a>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login