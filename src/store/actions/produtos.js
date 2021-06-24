import { PROD_CHANGE, SET_FILTER } from './actionsTypes';

export function alteraProduto(novoProduto) {
    return {
        type: PROD_CHANGE,
        payload: novoProduto
    }
}

export function setFilter(newFilter) {
    console.log("action");
    console.log(newFilter);
    return {
        type: SET_FILTER,
        payload: newFilter
    }
}