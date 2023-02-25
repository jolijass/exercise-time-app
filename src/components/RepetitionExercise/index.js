import { useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function RepetitionExercise() {
    const {name} = useParams()
    const [count, setCount] = useState(0)
        function countPlus() {
            setCount((number) => number + 1)
        }
        function countReset() {
            setCount(0)
        }
        return (
            <div>
                <h1>{name}</h1>
                <p>Welcome to Push-Ups!</p>
                <p id="count">{count}</p>
                <button  onClick={countPlus}>Add Rep</button>
                <button onClick={countReset}>Reset</button>
                <div id="mainmenu">
                    <Link to="/">Main Menu</Link>
                </div>
            </div>
        )
}