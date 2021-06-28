import './CadProduto.css';
import React from 'react';
import Img from '../arquivos/exemplo.jpg'

import { connect } from "react-redux";
import { insertProduct } from '../store/actions/produtos';


const CadProduto = (props) => {

    function SalvarProduto(Arr, produto) {
        const lstProd = Arr.slice();

        props.addProduct(lstProd);
    }

    const { produtos } = props;

    const produto = {
        id: 999,
        name: 'Novo produto',
        brand: 'Nova Marca',
        like: 0,
        dislike: 0,
        place: 'Fabrica',
        description: 'melhor produto do mundo'
    };


    return (
        <div className="Container-Produto" >
            <div className="Produto">
                <div className="Header">
                    <h1>Cadastro Produto</h1>
                </div>
                <div className="Content-Dados">
                    <div className="Div1">
                        <p>Nome: </p><input className="input" value={produto.name}></input>
                        <p>Marca: </p><input className="input" value={produto.brand}></input>
                        <p>Loja: </p><input className="input" value={produto.place}></input>
                        <p>Informações: </p><textarea className="memo" value={produto.description}></textarea>
                    </div>
                    <div className="Div2">
                        <img src={Img} width="100%" height="100%" />
                    </div>
                </div>
                <div className="Controle">
                    <div className="Salvar">
                        <a href="/" >
                            <button onClick={() => SalvarProduto(produtos, produto)}>Salvar</button>
                        </a>
                    </div>
                    <div className="Cancelar">
                        <button>Cancelar</button>
                    </div>
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
function mapDispatchToProp(dispatch) {
    return {
        addProduct(newFilter) {
            //action creator -> action
            const action = insertProduct(newFilter)
            dispatch(action)
        }
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProp
)(CadProduto);