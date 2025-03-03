const fetchData = async () => {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true';
    try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        console.log(data);
        
    } catch (error) {
        console("Error: ", error)
    }
}

fetchData()