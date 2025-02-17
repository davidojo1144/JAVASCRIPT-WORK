// Setters and getters
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    get personName(){
        return this.name
    }

    set personName(newName){
        this.name = newName
    }
}

const person1 = new Person("David Ojo", 23)
console.log(person1.personName);

person1.personName = "Samuel Ojo"
console.log(person1.personName);

