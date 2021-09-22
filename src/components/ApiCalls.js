export const dogAPI = (updateFunc) => {
    fetch("https://dog.ceo/api/breed/shiba/images/random/10")
        .then(response => response.text())
        .then(response => updateFunc(JSON.parse(response).message))
        .catch(error => console.log('error', error));
}


export const catAPI = (updateFunc) => {
    const catAPIURL = "https://api.thecatapi.com/v1/images/search?limit=10&format=json"
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "api_key=b31528df-bb42-4c16-8b30-10c31335f7aa");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: "follow",
    }
    let arr = []
    fetch(catAPIURL, requestOptions )
        .then(response => response.json())
        .then(response => (response.map((item) => arr.push(item.url))))
        .then(() => updateFunc(arr))
        .catch(error => console.log('error', error));
}