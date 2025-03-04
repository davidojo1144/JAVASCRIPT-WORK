
const city = "London"
const api = `http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=${city}`

//fetching data using async await
const fetchingData = async () => {
    try {
        const response = await fetch(api)
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error: ", error)
    }
   
}

fetchingData()



//fetching data using .then
const myFetchData = () => {
    try {
        fetch(api)
        .then(res => res.json())
        .then(myData => console.log(myData))
    } catch (error) {
        console.log("Error: ", error)
    }
}

myFetchData()