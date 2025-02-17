function Person(first, last){
    this.firstName = first,
    this.lastName = last
}

const person1 = new Person("David", "ojo")
const person2 = new Person("Daniel", "ojo")

person1.age = 40
// person1.firstName = "Joshua"
// person1.firstName = "Peter"

person1.greet = function(){
    console.log("Hello From The Ojo Family");
    
}

console.table(person1);
person1.greet()
console.table(person2);




