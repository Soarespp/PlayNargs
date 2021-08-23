export const getGenericIdMax = (arr,idInterno) => {
    const arrInterno = arr.slice();
    arrInterno.sort((a, b) => { return (b[idInterno] - a[idInterno]) });
    return (arrInterno[0][idInterno] + 1);
}