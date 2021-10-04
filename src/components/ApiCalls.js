export const dogAPI = (updateFunc) => {
    fetch("https://dog.ceo/api/breed/shiba/images/random/20")
        .then(response => response.text())
        .then(response => (JSON.parse(response).message))
        .then(updateFunc)
        .catch(error => console.log('error', error));
}

export const catAPI = (updateFunc) => {
    const catAPIURL = "https://api.thecatapi.com/v1/images/search?breed_id=ragd&limit=10&format=json"
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
        // .then(updateFunc)
        .catch(error => console.log('error', error));
}


// All current dog & cat facts apis don't have cors enabled APIS - Once node/express is learnt come back
// and add apis to query facts from server
// export const dogFactAPI = () => {
//     fetch("https://dog-api.kinduff.com/api/facts?number=1",{
//         mode: 'cors',
//     })
//         // .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(error => console.log('error', error));
// }

