import './Produto.css';
import React, { Component } from 'react';
import Header from '../Containers/Header';
import Img from '../arquivos/exemplo.jpg'

const Produto = props => {
    return (
        <div className="Container-Produto" >
            <div className="Produto">
                <div className="Header">
                    <h1>Cadastro Produto</h1>
                </div>
                <div className="Content-Dados">
                    <div className="Div1">
                        <p>Nome: </p><input className="input"></input>
                        <p>Marca: </p><input className="input"></input>
                        <p>Loja: </p><input className="input"></input>
                        <p>Informações: </p><textarea className="memo"></textarea>
                    </div>
                    <div className="Div2">
                        <img src={Img} width="100%" height="100%" />
                    </div>
                </div>
                <div className="Controle">
                    <div className="Salvar">
                        <button >Salvar</button>
                    </div>
                    <div className="Cancelar">
                        <button>Cancelar</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Produto;