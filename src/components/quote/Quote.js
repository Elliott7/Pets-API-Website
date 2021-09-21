import React from "react"
import style from "./Quote.module.css"

function Quote(props){
    return(
        <section className={style.quote}>
            <div className={style.container}>
                <h3 className={style.quoteText}>"{props.theme.quote}"</h3>
                <p>- {props.theme.animal}</p>
            </div>
        </section>
    )
}

export default Quote