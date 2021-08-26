import './CadProduto.css';
import React from 'react';
// import Img from '../../arquivos/exemplo.jpg'

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
        <div className="Container-Produto" >
            <Header />
            <div className='cadproduto-controle-tela'>
                <Link to={destino}>
                    <button>Voltar</button>
                </Link>
            </div>
            <div className="Produto">
                <div className="CadProduto-Header">
                    <h1>Cadastro Produto</h1>
                </div>
                <div className="Content-Dados">
                    <div className="Div1">
                        <p>Nome: </p><input className="input" value={produto.name}></input>
                        <p>Marca: </p><input className="input" value={produto.brand}></input>
                        <p>Loja: </p><input className="input" value={produto.place}></input>
                    </div>
                    <div className="content-memo">
                        <p>Informações: </p><textarea className="memo" value={produto.description}></textarea>
                    </div>
                    {/* <div className="Div2">
                        <img src={Img} width="100%" height="100%" alt={Img} />
                    </div> */}
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