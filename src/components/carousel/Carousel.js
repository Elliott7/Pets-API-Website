import React, {useState} from 'react'
import style from "./Carousel.module.css"
import '../shared-properties.css'

function Carousel(props){
    // const [url, setUrl] = useState('')
    let rotatingImages =
        <div className={`${style.imageContainers} ${style.rotating}`}>
            <img src={props.url}
                 className={`${props.theme.border} `}
                 alt="Changing pictures of animals"/>
        </div>
    const displayPictures = props.theme.carouselPictures.map((image) => {
        return(
            <div className={style.imageContainers} key={Math.random()}>
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
                {props.url? rotatingImages: displayPictures}
            </div>
        </section>
    )
}

export default Carousel