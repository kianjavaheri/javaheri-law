import React from 'react'
import { Link } from "react-router-dom"
import '../styling/components/Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Navbar() { 
  
  return (
    <div>
      <div id="above-nav">
        <div id="quick-contact">
          <p><FontAwesomeIcon id="caret" icon={faPhone} /> +1 925-989-4200</p>
          <p><FontAwesomeIcon id="caret" icon={faEnvelope} /> javaherilaw@yahoo.com</p>
        </div>
      </div>
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