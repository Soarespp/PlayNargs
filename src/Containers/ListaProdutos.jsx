import './ListaProdutos.css';
import React, { Component } from 'react';

import Card from '../Component/CardSimple';



const Produtos = [
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
];

class ListaProtudos extends Component {
    state = {};

    clickIncluir = (dados) => {
        const lstProtudos = dados;

        lstProtudos.push({
            name: 'Pedro' + parseInt(Math.random() * (10000)),
            marca: 'Pedro',
            nota: parseInt(Math.random() * (10)),
            loja: 'Argentina'
        });

        this.setState({
            Produtos: lstProtudos
        });
    };

    clickLike = (Arr, Idp) => {
        console.log(Arr);
        const dados = Arr;

        // dados.map(item => {
        //     if (item.id === Idp) {
        //         return item.like++
        //     }
        // });

        dados.forEach(item => {
            if (item.id === Idp) {
                return item.like++
            }
        });

        this.setState({
            Produtos: dados
        });
    };

    clickDisLike = (Arr, Idx) => {
        const dados = Arr;

        dados.forEach((item) => {
            if (item.id === Idx) {
                return item.dislike++;
            }
        })

        this.setState({
            Produtos: dados
        });
    };


    getNota(like, dislike) {
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

    render() {
        const lstProduto = Produtos.slice();
        lstProduto.sort((a, b) => { return this.getNota(b.like, b.dislike) - this.getNota(a.like, a.dislike) });

        return (
            <div className="ListaProdutos" >
                {lstProduto.map((produto, idx) => (
                    <Card produto={produto}
                        position={idx}
                        nota={this.getNota(produto.like, produto.dislike)}
                        clickLike={() => this.clickLike(lstProduto, produto.id)}
                        clickDisLike={() => this.clickDisLike(lstProduto, produto.id)}
                    />
                ))
                }
            </div >
        )
    }


}
export default ListaProtudos;