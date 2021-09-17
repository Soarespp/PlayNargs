import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Home from './Home/Home';
import Auth from '../auth/auth'
import { validateToken } from '../store/actions/authActions'
import { getDadosApi } from '../store/actions/produtos'

class AuthOrApp extends Component {
    componentWillMount() {
        this.props.getDadosApi();
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token
            return <Home user={user} />
        } else if (!user && !validToken) {
            return <Auth />
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })

function mapDispatchToProps(dispatch) {
    return {
        getDadosApi() {
            const action = getDadosApi()
            dispatch(action)
        },
        validateToken() {
            const action = validateToken()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)