// import React from 'react'
// import style from "./NeonAnimation.module.css"
//
// function NeonAnimation(props){
//     if (!props.children) {
//         return null
//     }
//     console.log(props.children)
//     let splitWords = props.children.split('')
//     console.log(splitWords)
//     let output = splitWords.map((letter) => {
//         if (letter === " "){ return <li className={style.space}> </li>}
//         else {
//             return(
//                 <li style={{"animation-delay": `${Math.random()*2}s`}} className="text-size-2">{letter}</li>
//             )
//         }
//     })
//
//     return(
//         <div className={props.className}>
//             <ul className={style.wrapper}>
//                 {output}
//             </ul>
//         </div>
//     )
// }
//
// export default NeonAnimation



import React from 'react'
import style from "./NeonAnimation.module.css"

function NeonAnimation(props){
    if (!props.children) {
        return null
    }
    //"animation-delay" or animationDelay
    let splitWords = props.children.split(' ')
    let output = []
    splitWords.map((word) => {
        let splitLetters = word.split("")
        let animatedWord = splitLetters.map((letter) => {
            return(
                <li style={{"animation-delay": `${Math.random()*2}s`}}
                    className={`text-size-2 ${props.theme? style.neonPink: style.neonBlue}`}>
                    {letter}
                </li>
            )
        })
        animatedWord.push(<li className={style.space}> </li>)
        output.push(
            <div className={style.wordBox}>
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