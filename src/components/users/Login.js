import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import axios from 'axios'
import Popup from "reactjs-popup"
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Header, Navbar, Footer } from '..'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            popupLogin: false,
            popupContent: ''
        }
    }

    handleClickSignUp() {
        window.location = '/register'
    }

    handleClickReset() {
        let elementSignin = document.getElementsByClassName('form-signin')[0]
        elementSignin.style.display = 'none'
        let elementReset = document.getElementsByClassName('form-reset')[0]
        elementReset.style.display = 'block'
    }

    handleClickBack() {
        let elementSignin = document.getElementsByClassName('form-signin')[0]
        elementSignin.style.display = 'block'
        let elementReset = document.getElementsByClassName('form-reset')[0]
        elementReset.style.display = 'none'
    }

    responseFacebook(response) {
        // console.log(response)
    }

    responseGoogle(response) {
        // console.log(response);
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = event => {
        event.preventDefault()
        const { username, password } = this.state
        let account = {
            username: username,
            password: password
        }
        axios.post('http://localhost:5000/users/authenticate/', account)
            .then(res => {
                if (res.data) {
                    if (res.data.error) {
                        this.setState({
                            popupLogin: true,
                            popupContent: res.data.error
                        })
                        setTimeout(() => {
                            this.setState({
                                popupLogin: false
                            })
                        }, 1500);
                    } else {
                        this.setState({
                            popupLogin: true,
                            popupContent: 'Login successfully!'
                        })
                        let account = res.data

                        localStorage.setItem('username', account.username)
                        localStorage.setItem('fullName', account.fullName)

                        setTimeout(() => {
                            this.setState({
                                popupLogin: false
                            })
                            window.location = '/'
                        }, 1000);
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <div className='card bg-light' id="logreg-forms">
                    <form className="form-signin" onSubmit={this.handleLogin}>
                        <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }} > Sign in</h1>
                        {/* <div className="social-login">
                            <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                            <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
                        </div> */}
                        <p>
                            <GoogleLogin
                                clientId="AIzaSyCazUJ_yVyeasDYcM1l0pOJj_Y0nT7p_Rg" //CLIENTID NOT CREATED YET
                                autoLoad={false}
                                render={_ => {
                                    return <a href="" className="btn btn-block btn-gmail"> <i className="fab fa-google"></i>   Sign In with Google</a>
                                }}
                                style={''}
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                            />

                            <FacebookLogin
                                appId="721546181655823"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                cssClass="btn btn-block btn-facebook"
                                icon={<i className="fab fa-facebook-f"></i>}
                                textButton="&nbsp;&nbsp;Sign In with Facebook"
                            />
                        </p>
                        <p style={{ textAlign: 'center' }}> OR  </p>
                        <input
                            type="text"
                            id="inputUsername"
                            className="form-control"
                            placeholder="User name"
                            required
                            onChange={this.handleUsernameChange}
                        />
                        <input
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            required
                            onChange={this.handlePasswordChange}
                        />
                        <button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt"></i> Sign in</button>
                        <a href="#" id="forgot_pswd" onClick={this.handleClickReset}>Forgot password?</a>
                        <hr />

                        <button className="btn btn-primary btn-block" type="button" id="btn-signup" onClick={this.handleClickSignUp}><i className="fas fa-user-plus"></i> Sign up New Account</button>
                    </form>

                    <form action="/reset/password/" className="form-reset">
                        <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required="" />
                        <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                        <a href="#" id="cancel_reset" onClick={this.handleClickBack}><i className="fas fa-angle-left"></i> Back</a>
                    </form>
                </div>
                <Popup
                    contentStyle={{ padding: '1%', fontWeight: 500, textAlign: 'center' }}
                    open={this.state.popupLogin}
                    position='center center'>
                    <div>{this.state.popupContent}</div>
                </Popup>
                <Footer />
            </div>
        )
    }
}

export default Login