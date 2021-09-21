import './auth.css'
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { login, loginAnonimo, loginAdmin } from '../store/actions/authActions'
import GoogleLogin from 'react-google-login';


class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }


    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }

    render() {
        const responseGoogle = (response) => {
            this.props.loginGoogle(response);
        }

        return (
            <div className="login-box">
                <div className="login-box-body">
                    <p className="login-box-msg">Bem vindo!</p>
                    <div>
                        <div className="login-box-buttons">
                            <button type="submit"
                                className="btn-login"
                                onClick={() => this.props.loginAnonimo()}>
                                {'Anônimo'}
                            </button>
                        </div>
                        {/* <div className="login-box-buttons">
                            <button type="submit"
                                className="btn-login"
                                onClick={() => this.props.loginAdmin()}>
                                {'Admin'}
                            </button>
                        </div> */}
                        <div className="login-box-buttons">
                            <GoogleLogin
                                clientId="641042680590-ablu62p5tmovu2ofhba9cl7th9n72i1k.apps.googleusercontent.com"
                                buttonText="Logar com Google"
                                onSuccess={responseGoogle}
                                onFailure={() => { }}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

Auth = reduxForm({ form: 'authForm' })(Auth)

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        filter: state.filter,
        auth: state.auth,
    };
}
function mapDispatchToProp(dispatch) {
    return {
        loginGoogle(newFilter) {
            //action creator -> action
            const action = login(newFilter)
            dispatch(action)
        },
        loginAnonimo() {
            //action creator -> action
            const action = loginAnonimo()
            dispatch(action)
        },
        loginAdmin() {
            //action creator -> action
            const action = loginAdmin()
            dispatch(action)
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Auth)