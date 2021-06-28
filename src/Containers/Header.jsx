import './Header.css';
import React from 'react';
import { Input } from 'antd';
import { connect } from "react-redux";

import CadProductDrawer from '../View/CadProductDrawer';

import { setFilter, alteraProduto } from '../store/actions/produtos';
import { createFromIconfontCN } from '@ant-design/icons';




const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
});

const Header = (props) => {
    const { produtos, filter } = props;

    function AddProduto() {
        const lstProdutos = produtos.slice();
        lstProdutos.push({
            id: 1,
            name: 'Morango',
            brand: 'ZOMMO',
            like: 0,
            dislike: 0,
            place: 'centro',
            description: 'melhor produto do mundo 1'
        });
        console.log(lstProdutos);
        props.addProduct(lstProdutos);
    }
    return (
        < div className="Header">
            <div className="Container-Logo">
                <a className="Logo" href="/" >Play Nargs</a>
            </div>
            <div className="Container-Options">

                <div className="Container-Schearch">

                    <Input className={"text-input"} placeholder="Pesquisa Loja"
                        value={filter}
                        onChange={e => {
                            console.log(filter)
                            console.log("header-filter")
                            props.filterProduct(e.target.value)
                        }}
                    />
                </div>
                <div className="Container-icons">
                    <div className="novo">
                        <a className="link" href="/produto" >
                            <IconFont type="icon-java" />
                        </a>
                    </div>
                    <div className="novo">
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
        },
        addProduct(newFilter) {
            console.log("insert prod")
            //action creator -> action
            const action = alteraProduto(newFilter)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Header);