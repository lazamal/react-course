const personObject = {
  name: "dor",
  age: 36,
  friends: friends,
};

const friends = ["dor", "stav", "yovel", "or"];

// console.log(Object.entries(personObject));
// console.log(personObject.name);
console.log(friends);

// destructuring
const person = { firsName: "John", age: 30 };
const { firsName, age } = person;

// ternary expression
const isAdult = age > 18 ? "yes" : "no";

//  function

const func = function myFunc(a, b) {
  return a + b;
};

const newObj = {
  add: func,
};
