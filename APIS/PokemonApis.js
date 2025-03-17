const api = "https://pokeapi.co/api/v2/pokemon/pikachu"
// fetch(api)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error("this is the error: ", error))



const fetchData = async ()=> {
    try {
        const response = await fetch(api)
        if (!response.ok) {
            console.error("response not okay")
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error("Theres an error: ", error)
    }
}

fetchData()

