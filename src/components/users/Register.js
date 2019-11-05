import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import axios from 'axios'
import Popup from "reactjs-popup"
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Header, Navbar, Footer } from '..'

// facebook: https://developers.facebook.com/apps
// google: https://console.developers.google.com/apis/credentials
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            email: '',
            phoneNumber: '',
            // username: '',
            // jobType: '',
            password: '',
            popupRegister: false,
            popupContent: ''
        }
    }

    handleNameChange = event => {
        this.setState({
            fullName: event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handlePhoneNumberChange = event => {
        let areaCode = document.getElementById('area-code')
        let value = event.target.value
        while (value[0] == '0') {
            value = value.substring(1, value.length)
        }
        this.setState({
            phoneNumber: areaCode.value + value
        })
    }

    handleUserNameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleComparePassword = _ => {
        let password = document.getElementById('password')
        let confirmPassword = document.getElementById('confirm-password')
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Password don't match")
        } else {
            confirmPassword.setCustomValidity("")
        }
    }

    handleRegisterAccount = event => {
        event.preventDefault()
        const account = {
            fullName: this.state.fullName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            username: this.state.username,
            password: this.state.password
        }
        axios.post('http://localhost:5000/users/register/', account)
            .then(res => {
                if (res.data && res.data.message) {
                    this.setState({
                        popupRegister: true,
                        popupContent: res.data.message
                    })
                    setTimeout(() => {
                        this.setState({
                            popupRegister: false
                        })
                    }, 1500);
                } else {
                    this.setState({
                        popupRegister: true,
                        popupContent: 'Register successfully!'
                    })
                    setTimeout(() => {
                        this.setState({
                            popupRegister: false
                        })
                        window.location = '/'
                    }, 1000);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    responseFacebook(response) {
        console.log(response)
    }

    responseGoogle(response) {
        // console.log(response);
    }

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <div className="card bg-light" style={{marginBottom: '10vh'}}>
                    <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free account</p>
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
                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>
                        <form onSubmit={this.handleRegisterAccount}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input
                                    name=""
                                    className="form-control"
                                    placeholder="User name" type="text"
                                    onChange={this.handleUserNameChange} />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-id-card"></i> </span>
                                </div>
                                <input
                                    name=""
                                    className="form-control"
                                    placeholder="Full name" type="text"
                                    onChange={this.handleNameChange} />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                </div>
                                <input
                                    name=""
                                    className="form-control"
                                    placeholder="Email address"
                                    type="email"
                                    onChange={this.handleEmailChange} />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                                </div>
                                <select className="custom-select" id='area-code' style={{ maxWidth: 120 }}>
                                    <option value="+84">+84</option>
                                    {/* <option value="+972">+972</option>
                                    <option value="+198">+198</option>
                                    <option value="+701">+701</option> */}
                                </select>
                                <input
                                    name=""
                                    className="form-control"
                                    placeholder="Phone number"
                                    type="text"
                                    onChange={this.handlePhoneNumberChange} />
                            </div>
                            {/* <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                                </div>
                                <select className="form-control">
                                    <option>Select job type</option>
                                    <option>Designer</option>
                                    <option>Manager</option>
                                    <option>Accaunting</option>
                                </select>
                            </div> */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input
                                    className="form-control"
                                    placeholder="Create password"
                                    type="password"
                                    id='password'
                                    onInput={this.handleComparePassword}
                                    onChange={this.handlePasswordChange} />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input
                                    id='confirm-password'
                                    className="form-control"
                                    placeholder="Repeat password"
                                    type="password"
                                    onInput={this.handleComparePassword} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                                <p className="text-center">Have an account? <a href="/login">Log In</a> </p>
                            </div>
                        </form>
                    </article>
                </div>
                <Popup
                    contentStyle={{ padding: '1%', fontWeight: 500, textAlign: 'center' }}
                    open={this.state.popupRegister}
                    position='center center'>
                    <div>{this.state.popupContent}</div>
                </Popup>
                <Footer />
            </div>
        );
    }
}

export default Register;