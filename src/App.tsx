import React from 'react'
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import ScrollButton from "./components/Scroll"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Family from "./pages/Family"
import Property from "./pages/Property"
import DUI from "./pages/DUI"
import Criminal from "./pages/Criminal"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollButton />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/family" element={<Family />}/>
        <Route path="/property" element={<Property />}/>
        <Route path="/dui" element={<DUI />}/>
        <Route path="/criminaldefense" element={<Criminal />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
