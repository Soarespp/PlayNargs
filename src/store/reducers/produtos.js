import {
    PROD_CHANGE,
    SET_FILTER,
    INSERT_PRODUCT,
    INITIAL_STATE,
    CHANGE_STATE_PRODUCT
} from '../actions/actionsTypes';

const newProductbkp = {
    idx: -1,
    name: "Teste Novo Prod",
    brand: 'Nova Marca',
    like: 0,
    dislike: 0,
    place: 'Fabrica',
    description: 'melhor produto do mundo'
};

var initialState = {
    filter: "",
    cadProduct: false,
    edicao: false,
    newProduct: newProductbkp,
    produto: newProductbkp,
    produtos: [{
        idx: 0,
        name: 'Fambroesa',
        brand: 'ZOMMO',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'melhor produto do mundo 1'
    },
    {
        idx: 1,
        name: 'Love 666',
        brand: 'Daya',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'melhor produto do mundo 1'
    }]
};

export default function (state = initialState, action) {
    switch (action.type) {
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
                produtos: action.payload
            }
        case INITIAL_STATE:
            return {
                ...state,
                produtos: initialState.produtos
            }
        case CHANGE_STATE_PRODUCT:
            return {
                ...state,
                cadProduct: action.payload,
                produto: action.prodPayLoad
            }
        default:
            return state
    }
}