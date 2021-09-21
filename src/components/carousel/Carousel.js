import React from 'react'
import style from "./Carousel.module.css"
import '../shared-properties.css'

function Carousel(props){

    const displayPictures = props.theme.carouselPictures.map((image) => {
        return(
            <div className={style.imageContainers}>
                <img src={image.src} alt={image.alt} className={props.theme.border}/>
                <div className={`${props.theme.textColor} text-size-1`}>{image.desc}</div>
            </div>
        )
    })

    return(
        <section className={style.mainContainer}>
            <h2 className={`${props.theme.textColor} text-size-3`}>
                Prepare for cuteness overload
            </h2>
            <div className={style.carousel}>
                {displayPictures}

            </div>
        </section>
    )
}

export default Carousel