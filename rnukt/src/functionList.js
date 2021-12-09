/** @format */

exports.binary = function (cutoff = 0.5) {
    const random = Math.random();
    if (random > cutoff) return 1;
    else return 0;
};
