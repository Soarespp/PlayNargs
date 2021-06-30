import './Header.css';
import React from 'react';
import { Input } from 'antd';
import { connect } from "react-redux";

import CadProductDrawer from '../View/CadProductDrawer';

import { setFilter } from '../store/actions/produtos';
import { createFromIconfontCN } from '@ant-design/icons';




const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
});

const Header = (props) => {
    const { filter } = props;


    return (
        < div className="Header">
            <div className="Container-Logo">
                <a className="Logo" href="/" >Play Nargs</a>
            </div>
            <div className="Container-Options">
                <div className="Container-Schearch">
                    <Input className={"text-input"} placeholder="Pesquisa Lojas"
                        value={filter}
                        onChange={e => {
                            props.filterProduct(e.target.value)
                        }}
                    />
                </div>
                <div className="Container-icons">
                    {/* <div className="novo1">
                        <a className="link" href="/produto" >
                            <IconFont type="icon-java" />
                        </a>
                    </div> */}
                    <div className="novo2">
                        <CadProductDrawer />
                    </div>
                </div>
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