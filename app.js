'use strict';

const chalk = require('chalk')

const getNames = require('./myModule')

const students = [
    {name: 'Anna', 
    age: 28},
    {name: 'Paolo', 
    age: 27}
];

console.log(chalk.blue(getNames(students));