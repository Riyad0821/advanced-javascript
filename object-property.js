const students = [
    {id: 21, name: 'Mohammad Riyad'},
    {id: 31, name: 'Fazlay Rabby'}, 
    {id: 41, name: 'Sabbir'},
    {id: 71, name: 'Amanat'}
];
//const names = [];
// for(let i = 0; i < students.length; i++){
//     names.push(students[i].name);
// }
const names = students.map(s => s.name);
const id = students.map(s => s.id);
const bigger = students.filter(s => s.id > 50);
const biggerOne = students.find(s => s.id > 50);

console.log(bigger);