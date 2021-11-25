import React from 'react'
import style from "./NeonAnimation.module.css"

function NeonAnimation(props){
    /** An animation module that takes the wrapped children and makes them appear like a flashing
     * neon sign*/
    if (!props.children) {
        return null
    }
    let neonColor
    if (props.theme === "Kitteh"){
        neonColor = style.neonPink
    } else if (props.theme === "Doge"){
        neonColor = style.neonBlue
    } else {
        neonColor = style.neonGreen
    }

    /*
    Splits the text into individual arrays containing a word, then those words are each split into their
    own array of letters. This is done so that the words will all display on one line whilst the
     page width is large enough. Once the page becomes too small, each array of letters (an individual
     word) will then wrap onto a new line rather than displaying each letter on its own row.
    */
    let splitWords = props.children.split(' ')
    let output = []
    splitWords.forEach((word) => {
        let splitLetters = word.split("")
        let animatedWord = splitLetters.map((letter) => {
            return(
                <li style={{"animationDelay": `${Math.random()*2}s`}}
                    className={`text-size-2 ${neonColor}`}
                    key={Math.random()}>
                    {letter}
                </li>
            )
        })
        animatedWord.push(<li key={Math.random()} className={style.space}> </li>)
        output.push(
            <div key={Math.random()} className={style.wordBox}>
                {animatedWord}
            </div>
            )})

    return(
        <div className={props.className}>
            <ul className={style.wrapper}>
                {output}
            </ul>
        </div>
    )
}

export default NeonAnimation