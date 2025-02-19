// Static method in javaScript are only bound to the class and not the object of the class

class Human{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log("i am speaking " + this.name);
    }

    static greet(){
        console.log("I love Gretting")
    }
}

const human1 = new Human("Daniel")
human1.speak()
Human.greet()