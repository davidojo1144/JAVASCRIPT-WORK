const API_URL = "https://fe-task-api.mainstack.io/";

const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            console.error(`Error: Received status code ${response.status}`);
            return;
        }
        const data = await response.json();
        console.log("Data fetched successfully: ", data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

fetchData();