const readline = require('readline');
const makepdf = require('./makepdf');

console.log("Hello World From NodeJs!");

let inputString = "";
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    inputString += line;
})

setTimeout(() => {
    console.log(inputString);
    const jsonObject = JSON.parse(inputString);
    makepdf.makeFromJson(jsonObject);
}, 1000)


