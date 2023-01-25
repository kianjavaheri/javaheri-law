import React from 'react'
import { Link } from "react-router-dom"
import './../styling/components/Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Navbar() { 

  // const btnContainer = document.getElementsByTagName("ul");
  // const btns = document.getElementById("nav-btn")

  // for(var i = 0; i < (btnContainer as any).length; i++) {
  //   (btns as any)[i].addEventListener("click", function(this:any) {
  //     var current = document.getElementsByClassName("active");
  //     current[0].className = (current[0].className as string).replace((current[0].className as string), " active");
  //     (this as any).className += "active";
      
  //   })
  //   // console.log("button " + i)
  // }
  
  return (
    <div>
      <nav>
        <h3><Link to="/">Javaheri Law</Link></h3>
        <ul>
          <li><Link to="/" className="link" id="nav-btn">Home</Link></li>
          <li><Link to="/about" className="link" id="nav-btn">About</Link></li>
          <li id="dropdown">
            Practice
            <FontAwesomeIcon id="caret" icon={faCaretDown} />
            <div id="dropdown-content">
              <Link to="/family" className="dropdown-item" id="nav-btn">Family Law</Link>
              <Link to="/property" className="dropdown-item" id="nav-btn">Real Property</Link>
              <Link to="/dui" className="dropdown-item" id="nav-btn">DUI</Link>
              <Link to="/criminaldefense" className="dropdown-item" id="nav-btn">Criminal Defense</Link>
            </div>
          </li>
          <li><Link to="/contact" className="link" id="nav-btn">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar