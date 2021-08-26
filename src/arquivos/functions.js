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