import React from 'react';
import { DescriptionLista } from '../style'
import { getNota } from '../../../arquivos/functions';

const CardDescListaItem = (props) => {
    const { produto } = props;
    return (
        <div style={{ 'height': '300px', 'width': '100%', 'grid-row': 'row' }}>
            <DescriptionLista >
                <p>{`Nota: ${getNota(produto.like, produto.dislike)}`}</p>
                <p>{produto.name}</p>
                <p>{produto.place}</p>
                <p>{produto.brand}</p>
                <p>{produto.description}</p>
            </DescriptionLista>
        </div>
    );
}


export default CardDescListaItem;