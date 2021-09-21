import React from 'react'
import style from './Footer.module.css'

function Footer(props){
    let logoClass = ((props.theme.animal === "Kitteh")? style.logo2: style.logo)

    return(
        <footer id="footer" className={`${style.main} ${props.theme.themeBackground}`}>
            <p className="text-size-1 headings-text">{props.theme.copy}</p>
            <a href="#header">
                <img className={logoClass}
                     src={props.theme.logoLocation[2]}
                     alt={props.theme.logoLocation[3]}
                />
            </a>


        </footer>
    )
}

export default Footer