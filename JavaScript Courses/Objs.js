class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet(){
        return "hello" + " " + this.name
    }

    changeName(newName){
        return this.name = newName
    }

    changeAge(newAge){
        return this.age = newAge
    }
}

const person1 = new Person("David ojo", 40)
console.log(person1);
console.log(person1.greet());

person1.changeName("Samuel ojo")
console.log(person1)

person1.changeAge(23)
console.log(person1.age)

