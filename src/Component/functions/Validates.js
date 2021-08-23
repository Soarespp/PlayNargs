export function ValidateProduct (arrDados, itemProd, nmCampo) {
    var result = false;
    result = (arrDados.find(it => it[nmCampo] === itemProd[nmCampo]) !== undefined)
    return result;
}