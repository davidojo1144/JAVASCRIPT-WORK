const mymaindiv = document.querySelector("#mymaindiv")
const div = mymaindiv.querySelector("div")
const h2 = div.querySelector("h2")


mymaindiv.addEventListener("click", (event)=> {
    mymaindiv.style.backgroundColor = "orange"
})

div.addEventListener("click", (event)=> {
    //event.stopPropagation()
    div.style.backgroundColor = "green"
})

h2.addEventListener("click", (event)=> {
    event.target.textContent = "New page"
})