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