
// Callback function
const display = (results)=> {
    console.log(results);
    
}

const add = (number1, number2, myCallback)=> {
    let sum = number1 + number2
    myCallback(sum)
}

add(20,30, display)