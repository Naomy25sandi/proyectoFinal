const API_URL = "http://localhost:3001/"

const postData = async (obj, endpoint) => {
    try {
        let response = await fetch(`http://localhost:3001/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }
}
export { postData }