// JavaScript constructor function

function Person(first, last){
    this.firstName = first,
    this.lastName = last,
    this.getFullName = function(){
        return this.firstName + " " + this.lastName
    }
}

const person1 = new Person("David", "Ojo")
const person2 = new Person("Daniel", "Ojo")

console.log(person2.getFullName());
