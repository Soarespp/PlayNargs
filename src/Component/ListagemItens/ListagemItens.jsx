import React from 'react';
import './ListagemItens.css';

const ListagemItens = (props) => {
    const { produtos, type } = props;
    return (
        <div className="Home">
            {produtos.length &&
                produtos
                    .filter(produto => produto.type === type)
                    .map((produto, idx) => (
                        <p>{produto.name}</p>
                    ))
            }
        </div>
    );
}


export default ListagemItens;