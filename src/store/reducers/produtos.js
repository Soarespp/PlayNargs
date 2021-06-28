import { PROD_CHANGE, SET_FILTER, INSERT_PRODUCT, INITIAL_STATE } from '../actions/actionsTypes';

var initialState = {
    filter: "",
    produtos: [{
        id: 0,
        name: 'Fambroesa',
        brand: 'ZOMMO',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'melhor produto do mundo 1'
    },
    {
        id: 2,
        name: 'Love 666',
        brand: 'Daya',
        like: 0,
        dislike: 0,
        place: 'centro',
        description: 'melhor produto do mundo 1'
    }]
}

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
            console.log(action.payload)
            return {
                ...state,
                produtos: action.payload
            }
        case INITIAL_STATE:
            return {
                ...state,
                produtos: initialState.produtos
            }
        default:
            return state
    }
}