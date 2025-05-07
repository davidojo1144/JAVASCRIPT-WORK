const API_URL = "https://learning-management-systems-10.onrender.com/api/register/"

const fetchData = async()=> {
    try {
        const response = await fetch(API_URL)
        if (!response) {
            console.error("There was an error with the response")
            return
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error("There was an error", error);
        
    }
}

fetchData()