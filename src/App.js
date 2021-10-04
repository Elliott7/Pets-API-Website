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
    const [dogAPILinks, setDogAPILinks] = useState([])
    const [catAPILinks, setCatAPILinks] = useState([])
    const randThemes = [birdData]

    useEffect(() => {
        loadDogAPI()
        loadCatAPI()
        // dogFactAPI()
    }, [])

    // Calls fetch API, parses into text and then sets the state and preloads the images
    let loadDogAPI = () => {
        dogAPI(loadDogLinks)
    }



    // Sets link state and preloads them on component mount so user doesn't need to wait for imgs to load
    let loadDogLinks = (resp) => {
        setDogAPILinks((prevState) => [...prevState, ...resp])
        preloadImages(resp)
    }

    let loadCatAPI = () => {
        catAPI(loadCatLinks)
    }

    let loadCatLinks = (resp) => {
        setCatAPILinks((prevState) => [...prevState, ...resp])
        preloadImages(resp)
    }

    function preloadImages(arr){
        arr.forEach((prePicture) => {
            const image = new Image()
            image.src = prePicture
        })
    }

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

    const loadDogPics = () => {
        setDogAPILinks((prevState) => {
            const temp = [...prevState]
            setUrl(temp.shift())
            return([...temp])
        })
        if (dogAPILinks.length == 0){loadDogAPI()}
    }

    const loadCatPics = () => {
        setCatAPILinks((prevState) => {
            const temp = [...prevState]
            setUrl(temp.shift())
            return([...temp])
        })
        if (catAPILinks.length == 3){loadCatAPI()}
    }

    return (
      <div className="App">
          <Header theme={theme} changeToDog={dogTheme} changeToCat={catTheme} random={randomTheme} />
          <Hero theme={theme} loadCatPics={loadCatPics} loadDogPics={loadDogPics} />
          <Carousel theme={theme} url={url}/>
          <Quote theme={theme} />
          <CallToAction theme={theme}/>
          <Footer theme={theme} />
      </div>
    );
}

export default App;
