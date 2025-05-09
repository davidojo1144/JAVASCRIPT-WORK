const heading = document.querySelector(".heading"); 
const userInput = document.querySelector(".inputfield");
let count = 1 

// userInput.addEventListener("input", (event) => {
//     heading.innerText = "Hello " + event.target.value + ", how are you ?";
// });

userInput.addEventListener("input", (event)=> {
    //heading.innerText = event.target.value + " " + count ++
    event.target.value === "" ? count = 1  : heading.innerText = event.target.value + " " + count ++
})