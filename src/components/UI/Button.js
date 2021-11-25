import React from 'react'
import style from './Button.module.css'


function Button(props){
    /** Accepts three parameters: type - onClick - className */

    return(
        <button
            type={props.type || 'button'}
            onClick={props.onClick}
            className={`${props.className} ${style.butt}`}
        >{props.children}
        </button>
    )
}

export default Button