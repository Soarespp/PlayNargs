import './ListaProdutos.css';
import React from 'react';
import { connect } from "react-redux";

import Card from '../Component/CardSimple';
import { alteraProduto } from '../store/actions/produtos';

function clickLike(Arr, Idp) {
    const dados = Arr;

    dados.forEach(item => {
        if (item.id === Idp) {
            return item.like++
        }
    });
    return dados;
};

function clickDisLike(Arr, Idx) {
    const dados = Arr;

    dados.forEach((item) => {
        if (item.id === Idx) {
            return item.dislike++;
        }
    })

    return dados;
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

const ListaProtudos = (props) => {
    const { produtos } = props;

    const lstProduto = produtos.slice();
    lstProduto.sort((a, b) => { return getNota(b.like, b.dislike) - getNota(a.like, a.dislike) });

    return (
        <div className="ListaProdutos" >
            {lstProduto.map((produto, idx) => (
                <Card produto={produto}
                    position={idx}
                    nota={getNota(produto.like, produto.dislike)}
                    clickLike={() => props.setProdutos(clickLike(lstProduto, produto.id))}
                    clickDisLike={() => props.setProdutos(clickDisLike(lstProduto, produto.id))}
                />
            ))
            }
        </div >
    )
}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
    };
}

function mapDispatchToProp(dispatch) {
    return {
        setProdutos(novoProduto) {
            //action creator -> action
            const action = alteraProduto(novoProduto)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(ListaProtudos);