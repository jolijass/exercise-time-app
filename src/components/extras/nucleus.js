import React from "react"
import { Link } from "react-router-dom"

export default function Nucleus({works}) {
  return (
    <div>
      <h1>EXERCISE TIME</h1>
      <p>Let's choose an exercise!</p>
      <ul>
        {works.map(workout => (
          <li key={workout.name}>
            <Link to={`/${workout.type}/${workout.name}`}>{workout.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}




