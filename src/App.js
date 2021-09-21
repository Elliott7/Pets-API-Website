import React, {useState} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Carousel from "./components/carousel/Carousel";
import Quote from "./components/quote/Quote";
import CallToAction from "./components/callToAction/CallToAction";
import Footer from "./components/footer/Footer";

const dogData = {
    "themeBackground": "dark-background",
    "secondaryBg":"dark-background-secondary",
    "border": "dark-secondary-border",
    "logoLocation": ["/images/logo4.png", "A happy Shibu Inu",
        "/images/logo3.png", "Cartoon Shibu Inu in a suit"],
    "heroPicture": ["/images/happyshib.png", "Two smiling Shibu Inu dogs"],
    "carouselPictures":[
        {'src':"/images/nicepupper.jpeg",
            'alt': "Ecstatic Shiba Inu puppy going for a walk",
            'desc': "Happy Boi going for a walk"},
        {'src':"/images/raspberrypupper.jpeg",
            'alt': "Beautiful Shiba Inu puppy blowing a raspberry",
            "desc": "Naughty pupper blowing a raspberry"},
        {'src':"/images/tiredpupper.jpeg",
            'alt': "Yawning Shibu Inu tired after a long walk",
            "desc": "Sleepy pupper after a long walk"},
        {'src':"/images/contentpupper.jpeg",
            'alt': "Smiling Shibu Inu puppy with a pumpkin on his head",
            "desc" :"Content pupper with pumpkin hat"}
    ],
    "footerLogoLocation": "",
    "quote": " Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof",
    "animal": "Doge",
    "textColor": 'dark-text',
    "copy": "Copyright Shiba Corp Pty Ltd"
}

const catData = {
    "themeBackground": "light-background",
    "secondaryBg": "light-background-secondary",
    "border": "light-secondary-border",
    "logoLocation": ["/images/catlogo1.jpeg", "A beautiful Ragdoll cat",
        "/images/overhangingcat.png", "Overhanging Kitten logo"],
    "heroPicture": ["/images/catlogo2.jpeg", "cute"],
    "carouselPictures":[
        {'src':"/images/cutecat5.jpeg",
            'alt': "Beautiful Ragdoll cat",
            'desc': "Beautiful Ragdoll Cat"},
        {'src':"/images/cutecat2.jpeg",
            'alt': "Beautiful Ragdoll cat",
            'desc': "Beautiful Ragdoll Cat"},
        {'src':"/images/cutecat3.jpeg",
            'alt': "Beautiful Ragdoll cat",
            'desc': "Beautiful Ragdoll Cat"},
        {'src':"/images/cutecat4.jpeg",
            'alt': "Beautiful Ragdoll cat",
            'desc': "Beautiful Ragdoll Cat"},
    ],
    "footerLogoLocation": "",
    "quote": "If I fits I sits",
    "animal": "Kitteh",
    "textColor": 'light-text',
    "copy": "Copyright Emperor Kitty Pty Ltd"
}


function App() {
    const [theme, setTheme] = useState(dogData)
    const [url, setUrl] = useState('')

    const dogTheme = () => {
        setUrl('')
        setTheme(dogData)
    }
    const catTheme = () => {
        setUrl('')
        setTheme(catData)
    }
    const onGetApi = (response) => {
        setUrl(response)
    }

    return (
      <div className="App">
          <Header theme={theme} changeToDog={dogTheme} changeToCat={catTheme} />
          <Hero theme={theme} onApiSave={onGetApi} />
          <Carousel theme={theme} url={url}/>
          <Quote theme={theme} />
          <CallToAction theme={theme}/>
          <Footer theme={theme} />
      </div>
    );
}

export default App;
