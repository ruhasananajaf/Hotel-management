import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Cards from "./Components/cards"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Project from "./Pages/Project"
// import card from './assets/Components/card'

function App() {
  return (
    <>
      <Navbar />
      {/* <card/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>

      <Cards/>
    </>
  )
}

export default App