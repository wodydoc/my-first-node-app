'use strict';
// SON LA MISMA:
// ------
// const getNames = (studentsList) => {
//     const names = studentsList.map((student) => {
//         return student.name;
//     });
//     return names;
// }
// -------
const getNames = studentsList => studentsList.map(student => student.name);
console.log(chalk.red)
module.exports = getNames;
