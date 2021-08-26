import './Header.css';
import React, { useState } from 'react';
import { Input } from 'antd';

import { connect } from "react-redux";
import { useEffect } from 'react';
import { setFilter } from '../../store/actions/produtos';
import { loginAnonimo } from '../../store/actions/authActions';

import CadProductDrawer from '../CadProductDrawer/CadProductDrawer';
import UserLogin from '../../Component/UserLogin/UserLogin';
import Menu from '../Menu/Menu';
import { Link } from "react-router-dom";

const Header = (props) => {
    const { filter, auth, search, loginAnonimo } = props;
    const [logado, setLogado] = useState(true);

    useEffect(() => {
        console.log('auth.user', auth.user, '-', auth.loginAnonimo)
        if ((auth.user === null) && (auth.loginAnonimo !== true)) {
            console.log(`teste 1`)
            loginAnonimo();
        } else if ((auth.user === null) || (auth.loginAnonimo === true)) {
            console.log(`teste 2`)
            setLogado(false);
        } else {
            setLogado(true);
        }
    }, [auth.user, auth.loginAnonimo, loginAnonimo])

    return (
        < div className="Header">
            <div className="Container-Logo">
                <Link to='/Home' className='container-log-link'><a className="Header-Logo">Play Nargs</a></Link>
            </div>
            <div className="Container-header">
                <div className="Container-Options">
                    {(logado && search) ? (
                        <div className="Container-Options-interno" >
                            <div className="Container-Schearch">
                                <Input placeholder="Pesquisa Lojas"
                                    value={filter}
                                    onChange={e => {
                                        props.filterProduct(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="novo2">
                                <CadProductDrawer />
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className="Container-Login">
                    <UserLogin />
                </div>
                <div className="Container-Menu">
                    <Menu />
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