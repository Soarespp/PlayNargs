import React, { useState, useEffect } from 'react';
import './InputSearch.css';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as produtoActions from '../../store/actions/produtos';

import CadProductDrawer from '../../Containers/CadProductDrawer/CadProductDrawer';

const InputSearch = (props) => {
    const { filter, auth } = props;
    const [logado, setLogado] = useState(true);

    return (
        <div className="InputSearch">
            {!auth.loginAnonimo ?
                (
                    <div className='content-search'>
                        <input placeholder="Pesquisa produtos"
                            value={filter}
                            onChange={e => {
                                props.setFilter(e.target.value)
                            }}
                        />
                        <div className='content-drawer'>
                            <CadProductDrawer />
                        </div>
                    </div>
                ) : null}
        </div>
    );
}

const mapDispatchToProp = (dispatch) => bindActionCreators(produtoActions, dispatch)

function mapStateToProps(state) {
    return {
        filter: state.filter,
        auth: state.auth,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(InputSearch);