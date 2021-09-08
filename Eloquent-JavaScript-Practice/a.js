//Object's deep copy and shallow copy
const a = {
    name: "riyad",
    age: 27,
    address: {
        village: "Syedpur",
        ward: 06
    }
}

// let b = Object.assign({}, a);
// let b = {...a, address:{...a.address}};
let b = JSON.parse(JSON.stringify(a));

b.name = "abc";
b.address.village = "Chandpur";

console.log(a.name);
console.log(b.name);
console.log(a.address.village);
console.log(b.address.village);


//Array's deep copy and shallow copy
const c = [1,2,3];

// let d = c.map(s => s); //Deep copy
// let d = c; //Shallow copy
// let d = Object.assign({}, c); //Deep copy
let d = {...c}; //Deep copy

d[1] = 5;

console.log(c[1]);
console.log(d[1]);

//Instance of custom classes's deep copy and shallow copy
// class Counter{
//     constructor(){
//         this.count = 5;
//     }
// }

// copy(){
//     const copy = new Counter();
//     copy.count = this.count;
//     return copy;
// }