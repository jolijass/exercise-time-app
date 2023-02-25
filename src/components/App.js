// import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepetitionExercise from "./RepetitionExercise/index.js"
import DurationExercise from "./DurationExercise/index.js"
import Layout from "./extras/layout.js"
import Nucleus from "./extras/layout.js"
import './App.css'

const works = (
  {
    name: "pushups",
    type: "repetition",
  },

  {
    name: "running",
    type: "duration",
  }
)

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Nucleus works={works}/>}/>
      <Route path="/repetition/:name" element={<RepetitionExercise works={works} />}/>
      <Route path="/duration/:name" element={<DurationExercise works={works} />}/>
    </Route>
  )
) */

function App() {
  /* return (
    <RouterProvider router={router} />
  ); */
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Nucleus works={works} />} />
            <Route path="/repetition/:name" element={<RepetitionExercise works={works} />} />
            <Route path="/duration/:name" element={<DurationExercise works={works} />} />
          </Route>
        </Routes>
      </Router>
    );
  }

export default App;
