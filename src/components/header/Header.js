import React from 'react'
import NavBar from "./NavBar";
import '../shared-properties.css'
import style from "./Header.module.css"

// Contains both the logo picture and the nav bar resources
function Header(props){
    const tes = () => {
        console.log('test')
    }
    return(
        <header className={`${props.theme.themeBackground}`}>
            {/*<img src="/images/logo4.png" className={style.logo} alt="Doge"/>*/}
            <img src={props.theme.logoLocation[0]} className={style.logo} alt={props.theme.logoLocation[1]}/>
            <NavBar>
                <button onClick={props.changeToDog}>Doge</button>
                <button onClick={props.changeToCat}>Kitteh</button>
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option3</a></li>
                <li>Option 4</li>
                <button onClick={tes}>Option 5</button>
            </NavBar>
        </header>
    )
}

export default Header