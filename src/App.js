import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Carousel from "./components/carousel/Carousel";
import Quote from "./components/quote/Quote";
import CallToAction from "./components/callToAction/CallToAction";
import Footer from "./components/footer/Footer";
import {catData, dogData, birdData} from "./components/Data";
import {dogAPI, catAPI, otherAPI} from "./components/ApiCalls";

function App() {
    const [theme, setTheme] = useState(dogData)
    const [url, setUrl] = useState('')
    const [dogAPILinks, setDogAPILinks] = useState([])
    const [catAPILinks, setCatAPILinks] = useState([])
    const [birdAPIlinks, setBirdAPILinks] = useState([])
    const randThemes = [birdData]
    const [quote, setQuote] = useState(theme.quote[0])
    const [count, setCount] = useState(1)

    // Preloads APIs and images on mount
    useEffect(() => {
        loadDogAPI()
        loadCatAPI()
        loadBirdAPI()
    }, [])


    // Both call fetch API, parses into text and then sets the state and preloads the images
    let loadDogAPI = () => {
        dogAPI(loadDogLinks)
    }

    let loadCatAPI = () => {
        catAPI(loadCatLinks)
    }

    let loadBirdAPI = () => {
        otherAPI((resp) => {
            setBirdAPILinks(resp)
            preloadImages(resp)
        })
    }

    //  Both set link state and preloads them on component mount so that it reduces the amount of time
    // the user needs to wait for images to load
    let loadDogLinks = (resp) => {
        setDogAPILinks((prevState) => [...prevState, ...resp])
        preloadImages(resp)
    }

    let loadCatLinks = (resp) => {
        setCatAPILinks((prevState) => [...prevState, ...resp])
        preloadImages(resp)
    }

    // Loads images so when user switches pages it is instant
    function preloadImages(arr){
        arr.forEach((prePicture) => {
            const image = new Image()
            image.src = prePicture
        })
    }

    const dogTheme = () => {
        setUrl('')
        setTheme(dogData)
        setQuote(dogData.quote[0])
        setCount(1)
    }
    const catTheme = () => {
        setUrl('')
        setTheme(catData)
        setQuote(catData.quote[0])
        setCount(1)
    }
    const randomTheme = () => {
        setUrl('')
        let ind = Math.floor(Math.random()*randThemes.length)
        setTheme(randThemes[ind])
        setQuote(randThemes[ind].quote[0])
        setCount(1)
    }

    const loadPics = (type) => {
        let func = (type == "Doge") ? setDogAPILinks : (type == "Kitteh") ? setCatAPILinks : setBirdAPILinks
        func((prevState) => {
                const temp = [...prevState]
                setUrl(temp.shift())
                return([...temp])
            })
        if (type == 'Doge' && dogAPILinks.length == 0){loadDogAPI()}
        else if (type == 'Kitteh' && catAPILinks.length == 3){loadCatAPI()}
        else if (birdAPIlinks.length == 2) {loadBirdAPI()}
    }

    const updateQuote = () => {
        if (count >= theme.quote.length-1) {
            setQuote(theme.quote[count])
            setCount(0)
        } else {
            setQuote(theme.quote[count])
            setCount(count + 1)
        }
    }

    return (
      <div className="App">
          <Header theme={theme} changeToDog={dogTheme} changeToCat={catTheme} random={randomTheme} />
          <Hero theme={theme} loadPics={loadPics}/>
          <Carousel theme={theme} url={url}/>
          <Quote theme={theme} quote={quote} />
          <CallToAction theme={theme} updateQuote={updateQuote}/>
          <Footer theme={theme} />
      </div>
    );
}

export default App;
