import React from 'react';
import './ListagemItens.css';
import { getNota } from '../../arquivos/functions';
import CardDescListaItem from './components/CardDescListaItem';
import ImgView from '../ImgView/ImgView';

import { ItemLista } from './style';

const ListagemItens = (props) => {
    const { produtos, type } = props;
    const lstProduto = produtos.sort((a, b) => { return getNota(b.like, b.dislike) - getNota(a.like, a.dislike) || a.name });
    return (
        <div className="ListagemItens"  >
            {lstProduto.length &&
                lstProduto
                    .filter(produto => produto.type === type)
                    .slice(0, 3)
                    .map((produto, idx) => (
                        <ItemLista lado={(idx % 2)}>
                            {((idx % 2) === 0) ? <ImgView produto={produto} /> : <CardDescListaItem produto={produto} />}
                            {((idx % 2) !== 0) ? <ImgView produto={produto} /> : <CardDescListaItem produto={produto} />}
                        </ItemLista>
                    ))
            }
        </div>
    );
}


export default ListagemItens;