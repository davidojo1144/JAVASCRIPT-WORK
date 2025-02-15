// Objects in javaScript

const person = {
    firstName: "David",
    lastName: "Ojo",
    age:12
}

console.log(person.firstName);

//Adding to the object
person.company = "Optimize"
console.table(person)

//deleting from the object
delete person.age
console.table(person)


//Accessing values in a nested object
const someone = {
    firstName: "Daniel",
    lastName: "sam",
    age:15,
    address: {
        country: "Nigeria",
        state: "Lagos",
        street: "Lekki"
    }
}

console.log(someone.address.country)


//For in loop is used to access the properties of an object
const person2 = {
    firstName: "Lara",
    lastName: "Dami",
    age:13
}

for(let prop in person2){
    console.log(prop + ":" + " " + person2[prop])
}
