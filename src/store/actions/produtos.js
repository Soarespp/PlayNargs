import {
    PROD_CHANGE, SET_FILTER, INSERT_PRODUCT, INITIAL_STATE, CHANGE_STATE_PRODUCT, NEW_ID_PRODUCT,
    UPDATE_PRODUCT, DEL_PRODUCT
} from './actionsTypes';

export function alteraProduto(novoProduto) {
    console.log('alteraProduto')
    return {
        type: PROD_CHANGE,
        payload: novoProduto
    }
}

export function setFilter(newFilter) {
    console.log('setFilter')
    return {
        type: SET_FILTER,
        payload: newFilter
    }
}

export function insertProduct(newProduct) {
    console.log('insertProduct teste', newProduct)
    return {
        type: INSERT_PRODUCT,
        payload: newProduct
    }
}

export function updateProduct(newProduct) {
    console.log('updateProduct teste', newProduct)
    return {
        type: UPDATE_PRODUCT,
        payload: newProduct
    }
}

export function deleteProduct(newProduct) {
    console.log('deleteProduct teste', newProduct)
    return {
        type: DEL_PRODUCT,
        payload: newProduct
    }
}

export function initialState(newProduct) {
    console.log('initialState')
    return {
        type: INITIAL_STATE,
        payload: newProduct
    }
}

export function changeIdProduct(newId) {
    console.log('chandeIdProduct', newId)
    return {
        type: NEW_ID_PRODUCT,
        payload: newId
    }
}

export function changeProductState(newStateProduct, product) {
    console.log('changeProductState')
    return {
        type: CHANGE_STATE_PRODUCT,
        payload: newStateProduct,
        prodPayLoad: product
    }
}
