import React from 'react'
import useDate from './useDate'

const Greeting = () => {
    const { date, time, wish } = useDate()
    return (
        <div className= 'greetings'>
            <h6>{wish}</h6>
            <h1>{time}</h1>
            <p>{date}</p>
        </div>
    )
}

export default Greeting
