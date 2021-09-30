/** @format */

// generate a random number between 0 and 1
exports.random = function () {
    return Math.random();
};

// generate a random number between 0 an n-1
exports.randomN = function (n) {
    if (!Number.isInteger(n)) return `${n} is not an integer!`;
    if (n <= 0) return `Please provide positive integer`;
    return Math.trunc(Math.random() * n);
};

// generate a random number between m an n-1
exports.randomMN = function (m, n) {
    if (m >= n) return `${m} is greater or equals to ${n}, can not generate random number!`;
    if (!Number.isInteger(m) || !Number.isInteger(n)) return `at least one of the inputed values are not an integer!`;
    if (m <= 0) return `Please provide positive integers`;
    return Math.trunc(Math.random() * (n - m)) + m;
};
