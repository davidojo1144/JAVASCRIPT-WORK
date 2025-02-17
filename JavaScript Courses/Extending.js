//Inheritance in javaScript

class Person{
    constructor(name) {
        this.name = name
    }

    greet(){
        return "Hello " + this.name
    }
}

class Student extends Person{

}

const student = new Student("Peter")
console.log(student);
console.log(student.greet())
