export const getNotaLike = (like, dislike) => {
    var val = parseInt((like / (like + dislike)) * 10);

    return getNota(val);
}

export function calcNota(listVoto) {
    var vltot = 0;
    listVoto.forEach(vtUser => {
        vltot = (vltot + vtUser.nota);
    });
    vltot = (vltot / (listVoto.length))
    return vltot;
}

export function getNotaUser(prd, user) {
    const locPdt = prd.find(item => item.user === user)
    if (locPdt) {
        return getNota(locPdt.nota);
    } else
        return 0;
}

export function getNota(nota) {
    if (nota > 10) {
        nota = 10;
    };

    if (nota < 0) {
        nota = 0;
    };

    if (isNaN(nota)) {
        nota = 0;
    };

    if (nota === null) {
        nota = 0;
    };

    return nota;
};