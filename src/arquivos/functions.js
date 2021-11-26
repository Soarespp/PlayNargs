export const getNota = (like, dislike) => {
    var val = parseInt((like / (like + dislike)) * 10);

    if (val > 10) {
        val = 10;
    };

    if (val < 0) {
        val = 0
    };

    if (isNaN(val)) {
        val = 0;
    }

    return val;
}

export function calcNota(listVoto) {
    var vltot = 0;
    console.log('listVoto', listVoto, listVoto.length)
    listVoto.forEach(vtUser => {
        vltot = (vltot + vtUser.nota);
        console.log('vltot', vltot, vtUser.nota)
    });
    vltot = (vltot / (listVoto.length))
    console.log('vltot 2', vltot)
    return vltot;
}