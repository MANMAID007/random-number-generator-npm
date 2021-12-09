/** @format */
const functionList = require("./functionList");

// generate a random number between 0 and 1
const random = function () {
    return Math.random();
};

// generate a random number between 0 an n-1
const randomN = function (n) {
    if (!Number.isInteger(n)) throw new Error(`${n} is not an integer!`);
    if (n <= 0) throw new Error(`Please provide positive integer`);
    return Math.trunc(Math.random() * n);
};

// generate a random number between m an n-1
const randomMN = function (m, n) {
    if (m >= n) throw new Error(`${m} is greater or equals to ${n}, can not generate random number!`);
    if (!Number.isInteger(m) || !Number.isInteger(n)) throw new Error(`at least one of the inputed values are not an integer!`);
    if (m <= 0) throw new Error(`Please provide positive integers`);
    return Math.trunc(Math.random() * (n - m)) + m;
};

// gives a random element from an array
const randomFromArr = function (...arr) {
    const n = arr.length;
    if (n === 0) throw new Error(`Length of the array is 0, can't process a random element`);
    if (n === 1) return arr[0];
    return arr[randomN(n)];
};

const randomByFn = function (fn, cutoff) {
    if (fn === "binary") return functionList.binary(cutoff);
    else throw new Error(`${fn} is not function in the list`);
};

module.exports = { random, randomN, randomMN, randomFromArr, randomByFn };
