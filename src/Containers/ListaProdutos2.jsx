import './ListaProdutos.css';
import React from 'react';
import { connect } from "react-redux";

import Card from '../Component/CardSimple';
import { alteraProduto, initialState } from '../store/actions/produtos';



function clickLike(Arr, Idp) {
    const dados = Arr;

    dados.forEach(item => {
        if (item.idx === Idp) {
            return item.like++
        }
    });
    return dados;
};

function clickDisLike(Arr, Idx) {
    const dados = Arr;

    dados.forEach((item) => {
        if (item.idx === Idx) {
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

    const { produtos, filter } = props;
    const lstProduto = produtos.slice();
    const regex = new RegExp(`^(.*)${filter}(.*)$`, "ig");

    lstProduto.sort((a, b) => { return getNota(b.like, b.dislike) - getNota(a.like, a.dislike) || a.name });
    return (
        <div className="ListaProdutos" >
            {lstProduto.length &&
                lstProduto
                    .filter(produto => produto.name.match(regex))
                    .map((produto, idx) => (
                        <Card produto={produto}
                            position={idx}
                            nota={getNota(produto.like, produto.dislike)}
                            clickLike={() => props.setProdutos(clickLike(lstProduto, produto.idx))}
                            clickDisLike={() => props.setProdutos(clickDisLike(lstProduto, produto.idx))}
                        />
                    ))
            }
        </div>

    )

}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos,
        filter: state.dados.filter,
    };
}

function mapDispatchToProp(dispatch) {
    return {
        setProdutos(novoProduto) {
            //action creator -> action
            const action = alteraProduto(novoProduto)
            dispatch(action)
        },
        initialState() {
            const action = initialState()
            dispatch(action)
        }
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProp
)(ListaProtudos);