console.log("Start script");

setTimeout(()=> {
    console.log("first timeout")
},2000)

setTimeout(()=> {
    console.log("Second timeout")
},500)

document.addEventListener("click", ()=> {
    console.log("i was Clicked")
})

console.log("End of script")