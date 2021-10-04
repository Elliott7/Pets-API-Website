import React from 'react'
import NavBar from "./NavBar";
import '../shared-properties.css'
import style from "./Header.module.css"
import neon from "../UI/NeonAnimation.module.css"

// Contains both the logo picture and the nav bar resources
function Header(props){
    let neonColor
    const cat = props.theme.animal === "Kitteh"
    const dog = props.theme.animal === "Doge"
    if (cat){
        neonColor = `${neon.neonPink} ${neon.increaseDuration}`
    } else if (dog){
        neonColor = `${neon.neonBlue} ${neon.increaseDuration}`
    } else {
        neonColor = `${neon.neonGreen} ${neon.increaseDuration}`
    }

    return(
        <header id="header" className={`${props.theme.themeBackground}`}>
            <a className={style.link} href="#footer">
                <img src={props.theme.logoLocation[0]} className={style.logo} alt={props.theme.logoLocation[1]}/>
            </a>
            <NavBar className="secondary-text" bgc={props.theme.themeBackground}>
                <button className={style.searchButton} onClick={props.changeToDog}>
                    <p className={`${neonColor} ${!dog && neon.animationOff}`}>Doge</p>
                </button>
                <button className={style.searchButton} onClick={props.changeToCat}>
                    <p className={`${neonColor} ${!cat && neon.animationOff}`}>Kitteh</p>
                </button>
                <button className={style.searchButton} onClick={props.random}>
                    <p className={`${neonColor} ${(!cat && !dog) || neon.animationOff}`}>Random?</p>
                </button>
                {/*<li><a href="#">Option 1</a></li>*/}
                {/*<li><a href="#">Option3</a></li>*/}
                {/*<li>Option 4</li>*/}
                {/*<button onClick={tes}>Option 5</button>*/}
            </NavBar>
        </header>
    )
}

export default Header