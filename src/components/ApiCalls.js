export const dogAPI = (updateFunc) => {
    /*** Fetches dog specific API, parses response and then returns promise of the input function
     * with the the response as the parameter*/
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
        .catch(error => console.log('error', error));
}

export const otherAPI = (updateFunc) => {
    const promise = Promise.all([
        fetch(        'https://some-random-api.ml/animal/birb')
            .then(res => res.json())
            .then(res => res.image),
        fetch(        'https://some-random-api.ml/animal/birb')
            .then(res => res.json())
                .then(res => res.image),
        fetch(        'https://some-random-api.ml/animal/birb')
            .then(res => res.json())
            .then(res => res.image),
    ])
    promise.then(res => updateFunc(res))
}