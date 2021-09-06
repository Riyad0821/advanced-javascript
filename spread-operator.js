var arr1 = [1, 2, 3];
var arr2 = [0, ...arr1];

console.log(arr2); // 0, 1, 2, 3

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3, 4, 5];

console.log(sum(...numbers)); // 6

console.log(sum.apply(null, numbers)); // 6

let numberStore = [1];
let newNumber = 12;

numberStore = [...numberStore, newNumber];

console.log(numberStore);

console.log(sum(...numberStore)); // NaN

function multiplication(x){
    return x * x;
}

console.log(multiplication(...numberStore));

const person = {
  name: 'John',
  address: {
    country: "USA",
    city: "San Francisco"
  }
};

// const updated = {...person, name: "Bob" };
// updated.address.city = "New York";
// console.log(person); // { name: 'John', address: { country: 'USA', city: 'New York' } }

const updated2 = {
  ...person, 
  address: {
    ...person.address,
    city: "New York"
  },
  name: "Bob"
};

console.log(person); // { name: 'John', address: { country: 'USA', city: 'San Francisco' } }

const numbers2 = [1, 2, 3, 4, 5];

//Adding

const index = numbers2.indexOf(2);
const added = [...numbers2.slice(0, index), 10, ...numbers2.slice(index)];

console.log(added); // [1, 2, 10, 3, 4, 5]

// Removing

const removed = numbers2.filter(n => n !== 2);

console.log(removed); // [1, 3, 4, 5]

// Updating
const updated = numbers2.map(n => n === 2 ? 20 : n);

console.log(updated); // [1, 20, 3, 4, 5]


let book = {title: "The Little Prince"};

function publish(book) {
  book.isPublished = true;
}

publish(book);

console.log(book); // { title: 'The Little Prince'}