const heading = document.querySelector("heading")
const userInput = document.querySelector("inputfield")

userInput.addEventListener("input", (event)=> {
    heading.innerHTML = "Hello " + event.target.value + " how are you"
})