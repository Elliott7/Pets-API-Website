import React, {useState} from 'react'
import style from './Hero.module.css'
import '../shared-properties.css'
import Button from "../UI/Button";

const catAPIURL = "https://api.thecatapi.com/v1/images/search?format=json"
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "api_key=b31528df-bb42-4c16-8b30-10c31335f7aa");

let requestOptions = {
    "limit": 5,
    method: 'GET',
    headers: myHeaders,
    redirect: "follow",
}

function Hero(props){
    // Create function to pass newPic to carousel
    // const [newPic, setNewPic] = useState('#')

    // Currently both API calls work
    // const dogAPI = () => {
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //         .then(response => response.text())
    //         .then(response => props.onApiSave(JSON.parse(response).message))
    //         .catch(error => console.log('error', error));
    // }
    // const catAPI = () => {
    //     fetch(catAPIURL, requestOptions)
    //         .then(response => response.text())
    //         .then(response => props.onApiSave(JSON.parse(response)[0].url))
    //         .catch(error => console.log('error', error));
    // }


    /*
     Change function to run on component mount - Change button click to pop
     item from array and update state. Have multiple images pre-loaded so
     that they can be cycled through quickly and efficiently.
    */
    const dogAPI = () => {
        fetch("https://dog.ceo/api/breed/shiba/images/random/10")
            .then(response => response.text())
            .then(response => props.onDogLoadApi(JSON.parse(response).message))
            .catch(error => console.log('error', error));
    }

    const catAPI = () => {
        fetch(catAPIURL, [requestOptions, {"limit": '5'}])
            .then(response => response.text())
            .then(response => console.log(response))
            // .then(response => props.onApiSave(JSON.parse(response)[0].url))
            .catch(error => console.log('error', error));
    }


    const clickHandler = (event) => {
        console.log("test")
        if (props.theme.animal === "Doge"){
            dogAPI()
        } else if (props.theme.animal === "Kitteh"){
            catAPI()
        }
    }

    return(
        <section className={`${style.hero} ${props.theme.themeBackground}`}>
            <div>
                <h1 className='headings-text text-size-4'>Doorway to Happiness</h1>
                <p className={`${style.text} text-size-1 secondary-text`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet, aspernatur beatae cupiditate earum error excepturi fuga illum impedit libero natus optio pariatur quae quasi similique tempora? Aperiam aut blanditiis delectus doloremque doloribus eos, ipsum nostrum pariatur perspiciatis porro quas quibusdam quidem quis rerum, sit soluta, vero voluptatibus. Ad!</p>
                <Button className={props.theme.secondaryBg} onClick={clickHandler}>More Pictures!</Button>
            </div>
            <picture className={`${style.pictureContainer} secondary-text text-size-1`}>
                <img
                    src={props.theme.heroPicture[0]}
                    className={style.picture}
                    alt={props.theme.heroPicture[1]}/>
            </picture>
        </section>
    )
}

export default Hero