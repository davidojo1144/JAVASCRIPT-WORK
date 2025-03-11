const people = [
    {
        "firstName": "john",
        "lastName": "samuel"
    },
    {
        "firstName": "joshua",
        "lastName": "dave"
    }
]

console.log(people);
people.forEach(person => {
    const temp = `${person.firstName} ${person.lastName}`
    console.log(temp)
})