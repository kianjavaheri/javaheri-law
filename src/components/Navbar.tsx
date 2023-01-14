import React from 'react'
import { Link } from "react-router-dom"
import './../styling/components/Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div>
      <nav>
        <h3><Link to="/">Javaheri Law</Link></h3>
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li id="dropdown">
            Practice
            <FontAwesomeIcon id="caret" icon={faCaretDown} />
            <div id="dropdown-content">
              <Link to="/family" className="dropdown-item">Family Law</Link>
              <Link to="/property" className="dropdown-item">Real Property</Link>
              <Link to="/dui" className="dropdown-item">DUI</Link>
              <Link to="/criminaldefense" className="dropdown-item">Criminal Defense</Link>
            </div>
          </li>
          <li><Link to="/contact" className="link">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar