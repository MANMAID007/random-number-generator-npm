/** @format */
const randomGen = require("./src/RandomGen");

// console.log(randomGen.random());
// console.log(randomGen.randomN(6));
// console.log(randomGen.randomMN(5, 10));
// console.log(randomGen.randomFromArr(456));
// console.log(randomGen.randomFromArr(1, 4, 54, 857, 23, 23, 32, 2, 6789, "gh", "fg", null));
console.log(randomGen.randomByFn("binary"));

module.exports = require("./src/RandomGen");
