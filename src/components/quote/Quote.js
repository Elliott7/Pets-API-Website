import React from "react"
import style from "./Quote.module.css"

function Quote(props){
    return(
        <section className={style.quote}>
            <div className={style.container}>
                <h3 className={`${props.theme.textColor} text-size-3`}>"
                    {props.theme.quote}"</h3>
                <p className={`${props.theme.textColor} text-size-2`}>- {props.theme.animal}</p>
            </div>
        </section>
    )
}

export default Quote