import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


export default function CyclingExercise() {
  const [terrain, setTerrain] = useState("Flat");
  const [timer, setTimer] = useState(30 * 60); // 30-minute timer in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  function startTimer() {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
  }

  function stopTimer() {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }

  function countReset() {
    setTerrain("Flat");
    setTimer(30 * 60);
    stopTimer();
  }

  function handleTerrainChange(event) {
    setTerrain(event.target.value);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  return (
    <div>
      <h1>CYCLING</h1>
      <p>Welcome to Cycling!</p>
      <p id="time">{formatTime(timer)}</p>
      <div id="terry">
        <p id="terrain">{terrain}</p>
      </div>
      <div id="label">
      <label id="label">
        Terrain: 
        <select value={terrain} onChange={handleTerrainChange}>
          <option id="one" value="Flat">Flat</option>
          <option id="two" value="Hilly">Hilly</option>
          <option id="three" value="Mountainous">Mountainous</option>
        </select>
      </label>
      </div>
      <br />
      {!isRunning && (
        <button id="start" onClick={startTimer}>Start</button>
      )}
      {isRunning && (
        <button id="stop" onClick={stopTimer}>Stop</button>
      )}
      <button id="reset" onClick={countReset}>Reset</button>
      <div id="mainmenu">
        <Link to="/">Main Menu</Link>
      </div>
    </div>
  );
}