import './Header.css';
import React, { useState } from 'react';
import { Input } from 'antd';
import { connect } from "react-redux";

import CadProductDrawer from '../View/CadProductDrawer';

import { setFilter } from '../store/actions/produtos';

import UserLogin from '../Component/UserLogin';
import { useEffect } from 'react';

const Header = (props) => {
    const { filter, auth } = props;
    const [logado, setLogado] = useState(true);

    useEffect(() => {
        if ((auth.user == null) || (auth.loginAnonimo === true)) {
            setLogado(false);
        } else {
            setLogado(true);
        }
    })
    return (
        < div className="Header">
            <div className="Container-Logo">
                <a className="Logo" href="/"  >Play Nargs</a>

            </div>

            <div className="Container-header">
                {logado ? (
                    <div className="Container-Options" >
                        <div className="Container-Schearch">
                            <Input placeholder="Pesquisa Lojas"
                                value={filter}
                                onChange={e => {
                                    props.filterProduct(e.target.value)
                                }}
                            />
                        </div>
                        <div className="Container-icons">
                            <div className="novo1">
                                <UserLogin />
                            </div>
                            <div className="novo2">
                                <CadProductDrawer />
                            </div>
                        </div>
                    </div>
                ) : null}
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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Header);