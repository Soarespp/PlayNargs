import './Header.css';
import React from 'react';
import { Input } from 'antd';
import { connect } from "react-redux";
import { setFilter } from '../store/actions/produtos';

const Header = (props) => {
    const { filter } = props;
    return (
        < div className="Header">
            <div className="Container-Logo">
                <a className="Logo" href="/" >Play Nargs</a>
            </div>
            <div className="Container-Schearch">
                <Input className="Schearch" style={{ width: '20%' }} placeholder="Pesquisa Loja"
                    value={filter}
                    // onChange={e => props.alterarMaximo(+e.target.value)}
                    onChange={e => {
                        console.log(filter)
                        console.log("header-filter")
                        props.filterProduct(e.target.value)
                    }}
                />
            </div>
        </div >
    )
}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        filter: state.filter,
    };
}
function mapDispatchToProp(dispatch) {
    return {
        filterProduct(newFilter) {
            console.log("header");
            console.log(newFilter);
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