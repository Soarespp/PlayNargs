/* eslint-disable import/no-anonymous-default-export */
import {
    PROD_CHANGE,
    SET_FILTER,
    INSERT_PRODUCT,
    NEW_ID_PRODUCT,
    UPDATE_PRODUCT,
    DEL_PRODUCT,
    BUSCAR_DADOS,
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
    produtos: [],
    // produtos: [{
    //     idx: 0,
    //     name: 'Fambroesa',
    //     brand: 'ZOMMO',
    //     like: 0,
    //     dislike: 0,
    //     place: 'centro',
    //     description: 'do tipo doce',
    //     userCad: "pedropauloosoares@gmail.com",
    //     type: 'nargs'
    // },
    // {
    //     idx: 1,
    //     name: 'Orange Peash Ice com o maior name',
    //     brand: 'Mr. Yoop',
    //     like: 0,
    //     dislike: 0,
    //     place: 'centro',
    //     description: 'do tipo doce com ice importada',
    //     userCad: "pedropauloosoares@gmail.com",
    //     type: 'juice'
    // },
    // {
    //     idx: 2,
    //     name: 'Baja',
    //     brand: 'Constellation',
    //     like: 0,
    //     dislike: 0,
    //     place: 'centro',
    //     description: 'doce',
    //     userCad: "pedropauloosoares@gmail.com",
    //     type: 'juice'
    // },
    // {
    //     idx: 3,
    //     name: 'Mint',
    //     brand: 'ZOMMO',
    //     like: 0,
    //     dislike: 0,
    //     place: 'centro',
    //     description: 'tipo ice para se combinar com outros de nargs',
    //     userCad: "pedropauloosoares@gmail.com",
    //     type: 'nargs'
    // },
    // {
    //     idx: 4,
    //     name: 'Melancia',
    //     brand: 'Caravela',
    //     like: 0,
    //     dislike: 0,
    //     place: 'centro',
    //     description: 'ice',
    //     userCad: "pedropauloosoares@gmail.com",
    //     type: 'juice'
    // },
    // {
    //     idx: 5,
    //     name: 'Alchiba',
    //     brand: 'Constellation',
    //     like: 0,
    //     dislike: 0,
    //     place: 'centro',
    //     description: 'sabor abacaxi ice',
    //     userCad: "pedropauloosoares@gmail.com",
    //     type: 'juice'
    // },
    // {
    //     idx: 6,
    //     name: 'Love 666',
    //     brand: 'Daya',
    //     like: 0,
    //     dislike: 0,
    //     place: 'centro',
    //     description: 'do tipo doce',
    //     userCad: "pedropauloosoares@gmail.com",
    //     type: 'nargs'
    // },
    // {
    //     idx: 7,
    //     name: 'Sargas',
    //     brand: 'Constellation',
    //     like: 0,
    //     dislike: 0,
    //     place: 'centro',
    //     description: 'extremamente doce, morango com pitaia',
    //     userCad: "pedropauloosoares@gmail.com",
    //     type: 'juice'
    // }]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case BUSCAR_DADOS:
            console.log('BUSCAR_DADOS', action.payload)
            return {
                ...state,
                produtos: action.payload
            }
        case PROD_CHANGE:
            return {
                ...state,
                produtos: action.payload
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case INSERT_PRODUCT:
            return {
                ...state,
                produtos: [...state.produtos,
                action.payload]
            }
        case UPDATE_PRODUCT:
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
        case NEW_ID_PRODUCT:
            return {
                ...state,
                idProduto: action.payload
            }
        default:
            return state
    }
}