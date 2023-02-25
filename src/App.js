// import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepetitionExercise from "./components/RepetitionExercise/index.js"
import DurationExercise from "./components/DurationExercise/index.js"
import CyclingExercise from "./components/CyclingExercise/index.js"
import Layout from "./components/extras/layout.js"
import Nucleus from "./components/extras/nucleus.js"
import "./components/exercise.css"
import './App.css'

const works = [
  {
    name: "PUSH-UPS",
    type: "repetition",
  },

  {
    name: "RUNNING",
    type: "duration",
  },
  {
    name: "CYCLING",
    type: "cycling",
  }
]

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Nucleus works={works} />} />
            <Route path="/repetition/:name" element={<RepetitionExercise works={works} />} />
            <Route path="/duration/:name" element={<DurationExercise works={works} />} />
            <Route path="/cycling/:name" element={<CyclingExercise works={works} />} />
          </Route>
        </Routes>
      </Router>
    );
  }

export default App;
