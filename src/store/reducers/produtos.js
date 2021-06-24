import { PROD_CHANGE } from '../actions/actionsTypes';

const initialState = {
    produtos:
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
        ],
}


export default function (state = initialState, action) {
    switch (action.type) {
        case PROD_CHANGE:
            return {
                ...state,
                produtos: action.payload
            }

        default:
            return state
    }
}