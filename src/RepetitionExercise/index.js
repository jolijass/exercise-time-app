import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function RepetitionExercise() {
  const { name } = useParams();
  const [count, setCount] = useState(0);

  function countPlus() {
    setCount((number) => number + 1);
  }

  function countReset() {
    setCount(0);
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>Welcome to the Repetition Exercise!</p>
      <p>{count}</p>
      <p>
        <button onClick={countPlus}>+</button>
        <button onClick={countReset}>Reset</button>
      </p>
        <div className="link-container">
        <Link to="/">Main Menu</Link>
        </div>
    </div>
  );
}



