import React, { useState, useEffect } from 'react';
import './Produtos.css';
import { connect } from "react-redux";

import { bindActionCreators } from 'redux';
import * as produtoActions from '../../store/actions/produtos';
import ListaProtudos from '../../Containers/ListaProdutos/ListaProdutos'
import Header from '../../Containers/Header/Header';
import CardViewListaProdutos from '../../Containers/NovaListaProdutos/CardViewListaProdutos';

const Produtos = (props) => {
    const [typeParam, setProdutosInt] = useState('');

    useEffect(() => {
        const { type } = props.match.params;
        setProdutosInt(type);
    }, [typeParam, props.match.params])

    return (
        <div className='Produtos'>
            <Header search={true} />
            {(typeParam === 'juice') ? <CardViewListaProdutos type={typeParam} /> : <ListaProtudos type={typeParam} />}

        </div>
    );
}

const mapDispatchToProp = (dispatch) => bindActionCreators(produtoActions, dispatch)

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Produtos);