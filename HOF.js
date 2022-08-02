const filter = (predicate, xs) => xs.filter(predicate);

const is = (type) => (x) => {console.log({x}); return Object(x) instanceof type};

console.log("Result: ", filter(is(Number), [0, '1', 2, null]));

console.log(Object('4') instanceof String)