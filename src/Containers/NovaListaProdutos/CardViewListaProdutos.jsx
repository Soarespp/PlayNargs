import './CardViewListaProdutos.css';
import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsProduto from '../../store/actions/produtos';

import { ViewProduct } from '../../Component/styleGeral';
import CardView from '../../Component/cardView/CardView';
import Img from '../../arquivos/girl-1.jpg';
import { TextoJuice } from './texts/texts';
import InputSearch from '../../Component/inputSearch/InputSearch';


function clickLike(Arr, prd, user) {
    const dados = Arr;

    dados.forEach(item => {
        if (item.idx === prd.idx) {
            item.like++
            item.userVoto = [...item.userVoto, { user: user.name, type: 'L' }]
        }
    });
    return prd
};

function clickDisLike(Arr, prd, user) {
    const dados = Arr;

    dados.forEach((item) => {
        if (item.idx === prd.idx) {
            item.dislike++
            item.userVoto = [...item.userVoto, { user: user.name, type: 'D' }]
        }
    })

    return prd
};

function getNota(like, dislike) {
    var val = parseInt((like / (like + dislike)) * 10);

    if (val > 10) {
        val = 10;
    };

    if (val < 0) {
        val = 0
    };

    if (isNaN(val)) {
        val = 0;
    }

    return val;
};

function getNota2(nota) {
    if (nota > 10) {
        nota = 10;
    };

    if (nota < 0) {
        nota = 0
    };

    if (isNaN(nota)) {
        nota = 0;
    }

    return nota;
};

const CardViewListaProdutos = (props) => {
    const { produtos, filter, type, updateProduct, auth } = props;
    const lstProduto = produtos.slice();
    const regex = new RegExp(`^(.*)${filter}(.*)$`, "ig");


    // lstProduto.sort((a, b) => { return getNota(b.like, b.dislike) - getNota(a.like, a.dislike) || a.name });
    lstProduto.sort((a, b) => { return (getNota2(b.nota) - getNota2(a.nota) || a.name - b.name) });
    return (
        <div className='CardViewListaProdutos'>
            <div className='Container-title' style={{}}>
                <ViewProduct src={Img} style={{ height: '300px', width: '100%' }} />
                <p>{TextoJuice}</p>
            </div>
            <InputSearch />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px,100%))', rowGap: '6px' }}>
                {lstProduto.length &&
                    lstProduto
                        .filter(produto => produto.type === type)
                        .filter(produto => produto.name.match(regex))
                        .map((produto, idx) => (
                            <CardView
                                produto={produto}
                                position={idx}
                                nota={getNota(produto.like, produto.dislike)}
                                clickLike={() => updateProduct(clickLike(lstProduto, produto, auth.user))}
                                clickDisLike={() => updateProduct(clickDisLike(lstProduto, produto, auth.user))
                                }
                                pos={idx}
                            />
                        ))
                }
            </div>
        </div>

    )

}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        filter: state.dados.filter,
        auth: state.auth,
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsProduto, dispatch)



export default connect(
    mapStateToProps,
    mapDispatchToProp
)(CardViewListaProdutos);