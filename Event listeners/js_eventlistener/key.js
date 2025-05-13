
log = console.log
const init = ()=> {
    document.addEventListener("keydown", (event)=> {
        if (event.key === "w" || event.key === "W") {
            log("The W key was clicked", event.key)
        }
    })
}

document.addEventListener("DOMContentLoaded", init)