// JavaScript Prototype

function Person(){
    this.name = "David Ojo"
}

Person.prototype.age = 25
const person1 = new Person()
console.log(person1.age);

Person.prototype = {age: 52}
const person2 = new Person()
console.log(person2.age);
