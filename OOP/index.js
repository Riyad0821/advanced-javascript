// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 2
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw();

// //Factory Function
// function createCircle(radius){
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();

// //Constructor Function
// function Circle(radius){
//     this.radius = radius,
//     this.draw = function(){
//         console.log("draw");
//     }
// }
 
// const another = new Circle(1);
// console.log(another);

// //Adding and Removing Properties
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// circle.location = { x: 1 };
// // circle['location'] = { x: 1};

// // const propertyName = 'location';
// // circle[propertyName] = { x: 1 };


// //Enumerating Properties
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(20);

// for(let key in circle) {
//     if(typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if('radius' in circle)
// console.log('Circle has a radius.');


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName = () => {
        return this.name;
    }

    getAge = () => {
        return this.age;
    }
}

let p1 = new Person("Riyad", 26);
console.log(p1.getName());

class Team{
    constructor(name, location, persons){
        this.name = name;
        this.location = location;
        this.persons = persons;
    }

    getName = () => {
        return this.name;
    }

    getLocation = () => {
        return this.location;
    }

    getPersons = () => {
        return this.persons;
    }

    addPerson = (person) => {
        this.persons.push(person);
    }
}

const t1 = new Team('red', 'Syedpur', [p1]);

console.log(t1.getPersons());

const p2 = new Person('Sabbir', 17);

t1.addPerson(p2);

console.log(t1.getPersons());
