import React from "react"
import { useParams } from "react-router-dom"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function DurationExercise() {
    const {name} = useParams()

    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)
    const intervalRef = useRef(null)

    const begTimer = () => {
        if (!running) {
            intervalRef.current = setInterval(() => {
                setTime((previously) => previously + 10)
            }, 10)
            setRunning(true)
        }
    }

    const endTimer = () => {
        clearInterval(intervalRef.current)
        setRunning(false)
    }

    const repTimer = () => {
        clearInterval(intervalRef.current)
        setTime(0)
        setRunning(false)
    }

    const forTime = (time) => {
        const day = new Date(time)
        return day.toISOString().substr(11, 12)
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>Welcome to Running!</p>
            <p id="run">Duration: {forTime(time)}</p>
            <button onClick={begTimer}>Start</button>
            <button onClick={endTimer}>Stop</button>
            <button onClick={repTimer}>Reset</button>
            <div id="mainmenu">
                <Link to="/">Main Menu</Link>
            </div>
        </div>
    )
}