import './CadProduto.css';
import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionsProduto from '../../store/actions/produtos';
import { Link } from "react-router-dom";

import Header from '../../Containers/Header/Header';


const CadProduto = (props) => {
    const { produtos } = props;
    const { id } = props.match.params;
    var destino = '';

    var produto = produtos.find(prod => prod.idx === parseInt(id)) || {};

    switch (produto.type) {
        case 'juice':
            destino = '/produtos/juice'
            break
        case 'nargs':
            destino = '/produtos/nargs'
            break
        default:
            destino = '/home'
    }


    return (
        <div className="Produto" >
            <Header />
            <div className="Container-Produto">
                <div className='cadproduto-controle-tela'>
                    <Link to={destino} className="link-back">
                        <KeyboardBackspaceIcon />
                    </Link>
                </div>
                <div className="CadProduto-Header">
                    <h1>Cadastro Produto</h1>
                </div>
                <div className="Content-Dados">
                    <p>Nome: </p><input className="input" value={produto.name}></input>
                    <p>Marca: </p><input className="input" value={produto.brand}></input>
                    <p>Loja: </p><input className="input" value={produto.place}></input>
                    <p>Informações: </p><textarea className="memo" value={produto.description}></textarea>
                </div>
                <div >
                    <span>
                        <img src={produto.urlImg.path} alt={produto.urlImg.path} />
                    </span>
                </div>
            </div>
        </div >
    )
}

function mapStateToProps(state) {
    return {
        produtos: state.dados.produtos
    };
}

const mapDispatchToProp = (dispatch) => bindActionCreators(actionsProduto, dispatch)



export default connect(
    mapStateToProps,
    mapDispatchToProp
)(CadProduto);