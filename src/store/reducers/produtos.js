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
};

export default function (state = initialState, action) {
    switch (action.type) {
        case BUSCAR_DADOS:
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