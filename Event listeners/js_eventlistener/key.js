
log = console.log
const init = ()=> {
    document.addEventListener("keydown", (event)=> {
        if (event.key === "Enter") {
            log("The Enter key was clicked")
        }
    })
}

document.addEventListener("DOMContentLoaded", init)