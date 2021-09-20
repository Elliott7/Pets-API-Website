import React from 'react'
import style from './Hero.module.css'
import '../shared-properties.css'
import Button from "../UI/Button";

function Hero(props){
    return(
        <section className={`${style.hero} ${props.theme.themeBackground}`}>
            <div>
                <h1>Doorway to Happiness</h1>
                <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet, aspernatur beatae cupiditate earum error excepturi fuga illum impedit libero natus optio pariatur quae quasi similique tempora? Aperiam aut blanditiis delectus doloremque doloribus eos, ipsum nostrum pariatur perspiciatis porro quas quibusdam quidem quis rerum, sit soluta, vero voluptatibus. Ad!</p>
                <Button className={props.theme.secondaryBg}>Press me</Button>
            </div>
            <picture className={style.pictureContainer}>
                <img
                    src={props.theme.heroPicture[0]}
                    className={style.picture}
                    alt={props.theme.heroPicture[1]}/>
            </picture>
        </section>
    )
}

export default Hero