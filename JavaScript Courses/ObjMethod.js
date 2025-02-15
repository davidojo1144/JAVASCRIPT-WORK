// JavaScript object method
const person = {
    firstName: "David",
    lastName: "Ojo",
    age:12,
    regard : function(){
        console.log("Hello There");
        
    }
}

person.regard()


const person2 = { 
    firstName2: "Daniel",
    lastName2: "Ayo",
    getFullName : function(){
        return this.firstName2 + " " + this.lastName2
    }
}

console.log(person2.getFullName())