const math = require('./math');


console.log(math.getRandomNumber(process.argv[2], process.argv[3]));
console.log(math.getRandomString(process.argv[4]));
console.log(math.getRandomArray(process.argv[2], process.argv[3], process.argv[4]));
