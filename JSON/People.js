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

const str1 = JSON.stringify(people)
console.log(str1)
const obj1 = JSON.parse(str1)
console.log(obj1)