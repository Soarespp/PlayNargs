/* eslint-disable import/no-anonymous-default-export */
import {
    PROD_CHANGE,
    SET_FILTER,
    INSERT_PRODUCT,
    INITIAL_STATE,
    CHANGE_STATE_PRODUCT,
    NEW_ID_PRODUCT,
    UPDATE_PRODUCT,
    DEL_PRODUCT,
} from '../actions/actionsTypes';

const newProductbkp = {
    idx: -1,
    name: "",
    brand: "",
    like: 0,
    dislike: 0,
    place: "",
    description: "",
    userCad: "",
    type: ""
};

var initialState = {
    filter: "",
    cadProduct: false,
    edicao: false,
    newProduct: newProductbkp,
    idProduto: -1,
    produtos: [{
        idx: 0,
        name: 'Fambroesa',
        brand: 'ZOMMO',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'do tipo doce',
        userCad: "pedropauloosoares@gmail.com",
        type: 'nargs'
    },
    {
        idx: 1,
        name: 'Orange Peash Ice',
        brand: 'Mr. Yoop',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'do tipo doce com ice importada',
        userCad: "pedropauloosoares@gmail.com",
        type: 'juice'
    },
    {
        idx: 2,
        name: 'Baja',
        brand: 'Constellation',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'doce',
        userCad: "pedropauloosoares@gmail.com",
        type: 'juice'
    },
    {
        idx: 3,
        name: 'Mint',
        brand: 'ZOMMO',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'tipo ice para se combinar com outros de nargs',
        userCad: "pedropauloosoares@gmail.com",
        type: 'nargs'
    },
    {
        idx: 4,
        name: 'Melancia',
        brand: 'Caravela',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'ice',
        userCad: "pedropauloosoares@gmail.com",
        type: 'juice'
    },
    {
        idx: 5,
        name: 'Alchiba',
        brand: 'Constellation',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'sabor abacaxi ice',
        userCad: "pedropauloosoares@gmail.com",
        type: 'juice'
    },
    {
        idx: 6,
        name: 'Love 666',
        brand: 'Daya',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'do tipo doce',
        userCad: "pedropauloosoares@gmail.com",
        type: 'nargs'
    },
    {
        idx: 7,
        name: 'Sargas',
        brand: 'Constellation',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'extremamente doce, morango com pitaia',
        userCad: "pedropauloosoares@gmail.com",
        type: 'juice'
    }]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROD_CHANGE:
            console.log('PROD_CHANGE')
            return {
                ...state,
                produtos: action.payload
            }
        case SET_FILTER:
            console.log('SET_FILTER')
            return {
                ...state,
                filter: action.payload
            }
        case INSERT_PRODUCT:
            console.log('INSERT_PRODUCT')
            return {
                ...state,
                produtos: [...state.produtos,
                action.payload]
            }
        case UPDATE_PRODUCT:
            console.log('UPDATE_PRODUCT')
            var lstProd = [...state.produtos];
            lstProd.forEach((item, idx) => {
                if (item.idx === action.payload.idx) {
                    lstProd[idx] = action.payload
                }
            });
            return {
                ...state,
                produtos: lstProd
            }
        case DEL_PRODUCT:
            var lstProd2 = [...state.produtos];
            lstProd2.forEach((item, idx) => {
                if (item.idx === action.payload.idx) {
                    lstProd2.splice(idx, 1);
                }
            });
            return {
                ...state,
                produtos: lstProd2
            }
        case INITIAL_STATE:
            console.log('INITIAL_STATE')
            return {
                ...state,
                produtos: initialState.produtos
            }
        case CHANGE_STATE_PRODUCT:
            console.log('CHANGE_STATE_PRODUCT')
            return {
                ...state,
                cadProduct: action.payload,
                produto: action.prodPayLoad
            }
        case NEW_ID_PRODUCT:
            console.log('NEW_ID_PRODUCT', action.payload)
            return {
                ...state,
                idProduto: action.payload
            }
        default:
            return state
    }
}