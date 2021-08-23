/* eslint-disable import/no-anonymous-default-export */
import {
    PROD_CHANGE,
    SET_FILTER,
    INSERT_PRODUCT,
    INITIAL_STATE,
    CHANGE_STATE_PRODUCT,
    CHANGE_PLACES_PRODUCT
} from '../actions/actionsTypes';

const newProductbkp = {
    idx: -1,
    name: "",
    brand: "",
    like: 0,
    dislike: 0,
    place: "",
    places: [],
    description: "",
    userCad: ""
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
        like: 7,
        dislike: 0,
        place: 'centro',
        places:[{id: 1, name:'centro'},
                {id: 2, name:'kobrasol'}],
        description: 'melhor produto do mundo 1',
        userCad:"pedropaulo@gmail.com"
    },
    {
        idx: 1,
        name: 'Love 666',
        brand: 'Daya',
        like: 2,
        dislike: 0,
        place: 'centro',
        places:[{id: 1, name:'centro'},
                {id: 2, name:'kobrasol'}],
        description: 'melhor produto do mundo 1',
        userCad:"pedropauloosoares@gmail.com"
    },
    {
        idx: 2,
        name: 'Menta',
        brand: 'Daya',
        like: 2,
        dislike: 3,
        place: 'favela',
        places:[{id: 1, name:'Iguatemi'}],
        description: 'melhor produto do mundo 1',
        userCad:"pedropauloosoares@gmail.com"
    },
    {
        idx: 3,
        name: 'Morango',
        brand: 'Daya',
        like: 2,
        dislike: 3,
        place: 'favela',
        places:[{id: 1, name:'Iguatemi'}],
        description: 'melhor produto do mundo 1',
        userCad:"pedropauloosoares@gmail.com"
    }]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROD_CHANGE:
            console.log('PROD_CHANGE',action.payload)
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
            console.log('CHANGE_STATE_PRODUCT',action.payload)
            console.log('CHANGE_STATE_PRODUCT',action.prodPayLoad)
            return {
                ...state,
                cadProduct: action.payload,
                produto: action.prodPayLoad
            }
        case CHANGE_PLACES_PRODUCT:
            return {
                ...state,
                ...state.produto,
                // produto: action.payload
                places: action.payload
            }
        default:
            return state
    }
}