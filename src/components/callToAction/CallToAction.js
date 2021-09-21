import React, {useState} from 'react'
import style from './CallToAction.module.css'
import Button from "../UI/Button"

const catAPIURL = "https://api.thecatapi.com/v1/images/search?format=json"
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "api_key=b31528df-bb42-4c16-8b30-10c31335f7aa");

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: "follow"
}

function CallToAction(props){
    const clickHandler = (event) => {
        console.log('test')
    }

    return(
        <section className={`${style.mainContainer}`}>
            <div className={`${style.container} ${props.theme.secondaryBg}`}>
                <div>
                    <p className='headings-text text-size-2'>Want more inspirational quotes?</p>
                    <p className='secondary-text text-size-1'>Of course you do!</p>
                </div>
                <Button className={`${props.theme.secondaryBg} ${style.button}`}
                        onClick={clickHandler}
                >More Quotes!</Button>
            </div>

        </section>
    )
}

export default CallToAction