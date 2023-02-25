import React from "react"
import { Link } from "react-router-dom"


export default function Nucleus({works}) {
  return (
    <div>
      <h1>EXERCISE TIME</h1>
      <p>Please choose an exercise</p>
        {works.map(workout => (
          <p key={workout.name}>
            <Link to={`/${workout.type}/${workout.name}`}>{workout.name}</Link>
          </p>
        ))}
    </div>
  )
}




