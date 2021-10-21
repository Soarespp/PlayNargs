import './Header.css';
import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
import { setFilter, getDadosApi } from '../../store/actions/produtos';
import { loginAnonimo } from '../../store/actions/authActions';

import UserLogin from '../../Component/UserLogin/UserLogin';
import Menu from '../Menu/Menu';
import { Link } from "react-router-dom";

const Header = (props) => {
    const { auth, loginAnonimo, getDadosApi } = props;
    const [logado, setLogado] = useState(true);
    console.log(logado)
    useEffect(() => {
        getDadosApi();
        if ((auth.user === null) && (auth.loginAnonimo !== true)) {
            loginAnonimo();
        } else if ((auth.user === null) || (auth.loginAnonimo === true)) {
            setLogado(false);
        } else {
            setLogado(true);
        }
    }, [auth.user, auth.loginAnonimo, loginAnonimo, getDadosApi])

    return (
        < div className="Header">
            <div className="Container-Logo">
                <Link to='/Home' className="Container-Logo-link">
                    <p className="Header-Logo">Play Nargs</p>
                </Link>
            </div>
            <div className="Container-header">
                <div className="Container-Menu">
                    <Menu />
                </div>
                <div className="Container-Login">
                    <UserLogin />
                </div>

            </div>


        </div >
    )
}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        filter: state.filter,
        auth: state.auth,
    };
}
function mapDispatchToProp(dispatch) {
    return {
        filterProduct(newFilter) {
            //action creator -> action
            const action = setFilter(newFilter)
            dispatch(action)
        },
        loginAnonimo() {
            //action creator -> action
            const action = loginAnonimo()
            dispatch(action)
        },
        getDadosApi() {
            //action creator -> action
            const action = getDadosApi()
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Header);