/*
This Module allowes a structured
and nice looking Console log
With Colors and Prefix
by https://github.com/leonrudowicz
*/
const colors = require('colors');

console.log('\033c');
console.log(colors.rainbow('Welcome to ' + 'AML Web' + '!'));

//Console Logging
var cons = {};
cons.err = colors.red('[ERROR]') + " - ";
cons.info = colors.cyan('[INFO]') + " - ";
cons.succ = colors.green('[SUCCESS]') + " - ";
cons.con = (name) => {
    return colors.yellow('[' + name + ']') + " - ";
}

module.exports = cons