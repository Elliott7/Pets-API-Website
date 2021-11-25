import React from 'react'
import style from './Hero.module.css'
import '../shared-properties.css'
import Button from "../UI/Button";


function Hero(props){
    const clickHandler = (event) => {
        // if (props.theme.animal === "Doge"){
        //     props.loadDogPics()
        // } else if (props.theme.animal === "Kitteh"){
        //     props.loadCatPics()
        // }
        // else {
        //     props.loadOther()
        // }
        if (props.theme.animal === "Doge"){
            props.loadPics("Doge")
        } else if (props.theme.animal === "Kitteh"){
            props.loadPics("Kitteh")
        }
        else {
            props.loadPics()
        }
    }

    return(
        <section className={`${style.hero} ${props.theme.themeBackground}`}>
            <div>
                <h1 className='headings-text text-size-4'>Doorway to Happiness</h1>
                <p className={`${style.text} text-size-1 secondary-text`}>
                    Pet ownership offers a multitude of benefits for physical and emotional health. After a long and difficult day, nothing can compare to the unconditional love you receive from a sweet pet.
                    <br/><br/>
                    In fact, research has shown that pets can decrease both blood pressure and anxiety, and perhaps even boost immunity. So take a load of stress off and look at these gorgeous pet pictures!</p>
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