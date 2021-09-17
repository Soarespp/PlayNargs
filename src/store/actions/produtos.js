import {
    PROD_CHANGE, SET_FILTER, INSERT_PRODUCT, NEW_ID_PRODUCT,
    UPDATE_PRODUCT, DEL_PRODUCT, BUSCAR_DADOS
} from './actionsTypes';

import api from '../../services/Api';

// const getDadosAction = async () => {
//     console.log('getDadosAction ')
//     let essencias = await api
//         .get('/essencia')
//         .then(result => {
//             console.log('result', result.data.essencias);
//             return result.data.essencias
//         })
//         .catch(err => {
//             // trata se alguma das promises falhar
//             console.error('Failed retrieving information', err);
//         });

//     console.log('Essencias', essencias)
//     return essencias
// }

export async function getDadosApi(novoProduto) {
    console.log('getDadosApi')
    let essencias = await api
        .get('/essencia')
        .then(result => {
            return result.data.essencias
        })
        .catch(err => {
            // trata se alguma das promises falhar
            console.error('Failed retrieving information', err);
        });
    return {
        type: BUSCAR_DADOS,
        payload: essencias
    }
}

export function alteraProduto(novoProduto) {
    console.log('alteraProduto')
    return {
        type: PROD_CHANGE,
        payload: novoProduto
    }
}

export function setFilter(newFilter) {
    return {
        type: SET_FILTER,
        payload: newFilter
    }
}

export async function insertProduct(newProduct) {
    console.log('insertProduct')
    const result = await api
        .post('/essencia', newProduct)
        .then(result => {
            return result
        })
        .catch(err => {
            // trata se alguma das promises falhar
            console.error('Failed post product', err);
        });

    if (!result.data.error) {
        return {
            type: INSERT_PRODUCT,
            payload: newProduct
        }
    }
}

export async function updateProduct(newProduct) {
    console.log('updateProduct')
    const result = await api
        .put('/essencia', newProduct)
        .then(result => {
            return result
        })
        .catch(err => {
            console.error('Failed alterar produto', err);
        });

    if (!result.data.error) {
        return {
            type: UPDATE_PRODUCT,
            payload: newProduct
        }
    }

}

export async function deleteProduct(newProduct) {
    console.log('deleteProduct', newProduct)
    const result = await api
        .delete('/essencia', { data: { idx: newProduct.idx } })
        .then(result => {
            return result
        })
        .catch(err => {
            console.error('Failed deletar produto', err);
        });

    console.log('result', result)
    if (!result.data.error) {
        return {
            type: DEL_PRODUCT,
            payload: newProduct
        }
    }
}

export function changeIdProduct(newId) {
    return {
        type: NEW_ID_PRODUCT,
        payload: newId
    }
}
