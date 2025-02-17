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

    get personAge(){
        return this.age
    }

    set personAge(newAge){
        this.age = newAge
    }
}

const person1 = new Person("David Ojo", 23)
console.log(person1.personName);

person1.personName = "Samuel Ojo"
console.log(person1.personName);

console.log(person1.age)

const person2 = new Person("Aliko Dangote", 50)
console.log(person2)

person2.personName = "Elon Musk"
person2.personAge = 60
console.log(person2)



