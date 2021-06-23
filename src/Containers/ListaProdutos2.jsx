import './ListaProdutos.css';
import React, { useState } from 'react';

import Card from '../Component/CardSimple';

const DadosProd =
    [
        {
            id: 0,
            name: 'Fambroesa',
            marca: 'ZOMMO',
            like: 5,
            dislike: 0,
            loja: 'centro'
        },
        {
            id: 1,
            name: 'Amora',
            marca: 'ZOMMO',
            like: 0,
            dislike: 0,
            loja: 'centro'
        },
        {
            id: 2,
            name: 'Fambroesa',
            marca: 'NELIX',
            like: 0,
            dislike: 5,
            loja: 'Argentina'
        },
        {
            id: 3,
            name: 'Picole',
            marca: 'Zommo',
            like: 3,
            dislike: 3,
            loja: 'Argentina'
        },
        {
            id: 4,
            name: 'Menta',
            marca: 'Nay',
            like: 25,
            dislike: 40,
            loja: 'Argentina'
        },
        {
            id: 5,
            name: 'Chiclete',
            marca: 'NAY',
            like: 55,
            dislike: 1,
            loja: 'Argentina'
        }
    ]
    ;

function clickLike(Arr, Idp) {
    console.log(Arr);
    const dados = Arr;

    dados.forEach(item => {
        if (item.id === Idp) {
            return item.like++
        }
    });

    return dados;
};

function clickDisLike(Arr, Idx) {
    const dados = Arr;

    dados.forEach((item) => {
        if (item.id === Idx) {
            return item.dislike++;
        }
    })

    return dados;
};

function getNota(like, dislike) {
    var val = parseInt((like / (like + dislike)) * 10);

    if (val > 10) {
        val = 10;
    };

    if (val < 0) {
        val = 0
    };

    if (isNaN(val)) {
        val = 0;
    }

    return val;
};

const ListaProtudos = (props) => {
    const [Produtos, setProdutos] = useState(DadosProd)

    const lstProduto = Produtos.slice()
    lstProduto.sort((a, b) => { return getNota(b.like, b.dislike) - getNota(a.like, a.dislike) });

    return (
        <div className="ListaProdutos" >
            {lstProduto.map((produto, idx) => (
                <Card produto={produto}
                    position={idx}
                    nota={getNota(produto.like, produto.dislike)}
                    clickLike={() => setProdutos(clickLike(lstProduto, produto.id))}
                    clickDisLike={() => setProdutos(clickDisLike(lstProduto, produto.id))}
                />
            ))
            }
        </div >
    )
}

export default ListaProtudos;