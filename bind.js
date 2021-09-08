const john = {
    name: 'John',
    age: 24,
};

const jane = {
    name: 'Jane',
    age: 22,
};

function greeting(){
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}

const greetingJohn = greeting.bind(john);
greetingJohn();

const greetingJane = greeting.bind(jane);
greetingJane();
