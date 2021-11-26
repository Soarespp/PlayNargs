import React from 'react';
import { DescriptionLista } from '../style'
import { getNota } from '../../../arquivos/functions';

const CardDescListaItem = (props) => {
    const { produto } = props;
    return (
        <div style={{ gridRow: 'row', display: 'flex', minHeight: '300px' }}>
            <DescriptionLista >
                <p>{`Nota: ${getNota(produto.like, produto.dislike)}`}</p>
                <p>{`Nome: ${produto.name}`}</p>
                <p>{`Marca: ${produto.place}`}</p>
                <p>{`Loja: ${produto.brand}`}</p>
            </DescriptionLista>
        </div>
    );
}


export default CardDescListaItem;