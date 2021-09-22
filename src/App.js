import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Carousel from "./components/carousel/Carousel";
import Quote from "./components/quote/Quote";
import CallToAction from "./components/callToAction/CallToAction";
import Footer from "./components/footer/Footer";
import {catData, dogData, birdData} from "./components/Data";
import {dogAPI, catAPI} from "./components/ApiCalls";

function App() {
    const [theme, setTheme] = useState(dogData)
    const [url, setUrl] = useState('')
    const randThemes = [birdData]

    let dogAPILinks = []
    let catAPILinks = []

    function updateDog(response){
        dogAPILinks.push(...response)
    }
    function updateCat(response){
        catAPILinks.push(...response)

    }

    useEffect(() => {
        dogAPI(updateDog)
        catAPI(updateCat)
        setTimeout(() => console.log(dogAPILinks, catAPILinks), 2000)
    }, [])

    const dogTheme = () => {
        setUrl('')
        setTheme(dogData)
    }
    const catTheme = () => {
        setUrl('')
        setTheme(catData)
    }
    const randomTheme = () => {
        setUrl('')
        let ind = Math.floor(Math.random()*randThemes.length)
        setTheme(randThemes[ind])
    }
    const onGetApi = (response) => {
        setUrl(response)
    }
    const onDogLoadApi = (response) => {
        dogAPILinks = [...response]
        console.log(dogAPILinks)
    }

    return (
      <div className="App">
          <Header theme={theme} changeToDog={dogTheme} changeToCat={catTheme} random={randomTheme} />
          <Hero theme={theme} onApiSave={onGetApi} onDogLoadApi={onDogLoadApi} />
          <Carousel theme={theme} url={url}/>
          <Quote theme={theme} />
          <CallToAction theme={theme}/>
          <Footer theme={theme} />
      </div>
    );
}

export default App;
