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

export async function insertProduct(newProduct, newFile) {
    newProduct.urlImg = await IncDelFileProduct(newProduct, newFile)
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

async function IncDelFileProduct(newProduct, newFile, idFile) {
    console.log('newProduct', newProduct)
    console.log('newFile', newFile)
    console.log('idFile', idFile)
    if (((newFile) && (Object.keys(newFile).length !== 0) && (newProduct.urlImg) && (newProduct.urlImg.url.length !== 0)) ||
        ((newFile) && (Object.keys(newFile).length === 0) && (newProduct.urlImg) && (newProduct.urlImg.url.length !== 0) && (idFile.length === 0))) {
        await api.delete(`img/${newProduct.urlImg.id}`)
            .catch(err => {
                console.error('Failed deletar produto', err);
            });
    }

    if ((newFile) && (Object.keys(newFile).length !== 0)) {
        const data = new FormData();
        data.append("file", newFile.file, newFile.name);

        return await api
            .post("img", data)
            .then(response => {
                return {
                    id: response.data._id,
                    url: response.data.url
                }

            })
            .catch((err) => {
                console.error('Failed incluir img produto', err);
            });
    }
}

export async function updateProduct(newProduct, newFile, idFile) {
    newProduct.urlImg = await IncDelFileProduct(newProduct, newFile, idFile)
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
    if ((newProduct.urlImg) && (newProduct.urlImg.id.length !== 0))
        await api.delete(`img/${newProduct.urlImg.id}`)
            .catch(err => {
                console.error('Failed deletar produto', err);
            });

    const result = await api
        .delete('/essencia', { data: { idx: newProduct.idx } })
        .then(result => {
            return result
        })
        .catch(err => {
            console.error('Failed deletar produto', err);
        });

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
