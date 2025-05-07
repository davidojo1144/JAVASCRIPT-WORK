document.addEventListener("readystatechange", (event)=> {
    if (event.target.readyState === "complete") {
        console.log("This is complete");
        initApp()
    }
})




const initApp = () => {
const mymaindiv = document.querySelector("#mymaindiv")
const div = mymaindiv.querySelector("div")
const h2 = div.querySelector("h2")



mymaindiv.addEventListener("click", (event)=> {
    mymaindiv.classList.toggle("blue")
    mymaindiv.classList.toggle("pink")
})

div.addEventListener("click", (event)=> {
    //event.stopPropagation()
    div.classList.toggle("red")
    div.classList.toggle("green")
    //div.style.backgroundColor = "green"
})

h2.addEventListener("click", (event)=> {
    const myText = event.target.textContent
    myText === "Main page" ? 
    event.target.textContent = "New page" :
    event.target.textContent = "Main page"
})

const nav = document.querySelector("nav")
nav.addEventListener("mouseover", (event)=> {
    event.target.classList.add("mouse")
})

nav.addEventListener("mouseout", (event)=> {
    event.target.classList.remove("mouse")
})

}