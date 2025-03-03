const fetchDatas = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data.slice(10,50));
    } catch (error) {
        console.log("Error: ", error)
    }
}

fetchDatas()


