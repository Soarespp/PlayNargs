import './Header.css';
import React, { useState } from 'react';
import { Input } from 'antd';

import { connect } from "react-redux";
import { useEffect } from 'react';
import { setFilter } from '../../store/actions/produtos';
import { loginAnonimo } from '../../store/actions/authActions';

import UserLogin from '../../Component/UserLogin/UserLogin';
import Menu from '../Menu/Menu';
import { Link } from "react-router-dom";

const Header = (props) => {
    const { filter, auth, search, loginAnonimo } = props;
    const [logado, setLogado] = useState(true);

    useEffect(() => {
        if ((auth.user === null) && (auth.loginAnonimo !== true)) {
            loginAnonimo();
        } else if ((auth.user === null) || (auth.loginAnonimo === true)) {
            setLogado(false);
        } else {
            setLogado(true);
        }
    }, [auth.user, auth.loginAnonimo, loginAnonimo])

    return (
        < div className="Header">
            <div className="Container-Logo">
                <Link to='/Home' >
                    <a className="Header-Logo">Play Nargs</a>
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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Header);