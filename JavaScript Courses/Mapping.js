const persona = [
    {
        name: "Alice",
        age: 28,
        gender: "Female",
        occupation: "Software Engineer"
    },
    {
        name: "Bob",
        age: 34,
        gender: "Male",
        occupation: "Data Scientist"
    },
    {
        name: "Charlie",
        age: 22,
        gender: "Non-binary",
        occupation: "Graphic Designer"
    },
    {
        name: "Diana",
        age: 40,
        gender: "Female",
        occupation: "Project Manager"
    }
];

const job = persona.map(person => person.occupation)
console.log(job);


