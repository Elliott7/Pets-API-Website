import React from 'react'
import style from './CallToAction.module.css'
import Button from "../UI/Button"

function CallToAction(props){
    return(
        <section className={`${style.mainContainer}`}>
            <div className={`${style.container} ${props.theme.secondaryBg}`}>
                <div>
                    <p className='headings-text text-size-2'>Want more inspirational quotes?</p>
                    <p className='secondary-text text-size-1'>Of course you do!</p>
                </div>
                <Button className={`${props.theme.secondaryBg} ${style.button}`}
                        onClick={props.updateQuote}
                >More Quotes!</Button>
            </div>

        </section>
    )
}

export default CallToAction