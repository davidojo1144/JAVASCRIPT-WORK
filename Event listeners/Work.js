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
    mymaindiv.classList.toggle("blue")
    mymaindiv.classList.toggle("pink")
    //div.style.backgroundColor = "green"
})

h2.addEventListener("click", (event)=> {
    event.target.textContent = "New page"
})

}