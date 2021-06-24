import { PROD_CHANGE } from './actionsTypes';

export function alteraProduto(novoProduto) {
    return {
        type: PROD_CHANGE,
        payload: novoProduto
    }
}
