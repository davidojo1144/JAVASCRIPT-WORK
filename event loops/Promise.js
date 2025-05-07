console.log("Start script");

setTimeout(()=> {
    console.log("timeout")
},0)

Promise.resolve().then(() => {
    console.log("First promise")
}).then(()=> {
    console.log("Second promise")
})

console.log("End of script")