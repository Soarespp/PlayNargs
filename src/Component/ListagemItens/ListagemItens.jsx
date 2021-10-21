import React from 'react';
import './ListagemItens.css';
import { getNota } from '../../arquivos/functions';

import { ViewProduct, DescriptionLista } from './style'

const ListagemItens = (props) => {
    const { produtos, type } = props;
    const lstProduto = produtos.sort((a, b) => { return getNota(b.like, b.dislike) - getNota(a.like, a.dislike) || a.name });
    return (
        <div className="ListagemItens">
            {lstProduto.length &&
                lstProduto
                    .filter(produto => produto.type === type)
                    .slice(0, 3)
                    .map((produto, idx) => (
                        <div className='item-lista'>
                            {(produto.urlImg) && (produto.urlImg.url.length > 0) ?
                                <ViewProduct src={produto.urlImg.url} id={idx} /> :
                                <DescriptionLista>
                                    {produto.name}
                                </DescriptionLista>
                            }
                            <p className='text-itens'>{`Nota: ${getNota(produto.like, produto.dislike)}`}</p>
                        </div>
                    ))
            }
        </div>
    );
}


export default ListagemItens;