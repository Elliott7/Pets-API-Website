import React from 'react'
import style from "./NavBar.module.css"
import '../shared-properties.css'

/*
Accepts any number of buttons/list items and renders a list. Wrap this component around
either multiple list items or multiple buttons.
Mobile responsive - renders a dropdown list when width gets too small
*/

function NavBar(props){
    return(
        <nav className={style.dropdown}>
            <img src="images/ham.png" className={style.hamburger} alt="doge"/>
            <ul className={style.dropdownContent}>
                {props.children}
            </ul>
        </nav>
    )
}
export default NavBar