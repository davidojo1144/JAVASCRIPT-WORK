fetch("https://reqres.in/api/users/", {
    method: "POST",
    headers: {
        'content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name: "first user"
    })
})
.then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log(error))