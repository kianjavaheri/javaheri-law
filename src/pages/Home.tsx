import React from 'react'
import { Link } from "react-router-dom"
import './../styling/pages/Home.css'
import supreme from './../util/imgs/supreme_court.jpg'

function Home() {

  return (
    <div>
      <div id="home-wrapper" className="fade-in">
        <div id="heading">
          <img src={supreme} alt="Supreme Court Banner" />
          <div id="gradient"></div>
          <div id="heading-text">
            <h1>Law Offices of Ali J. Javaheri</h1>
            <h5>A Professional Law Corporation</h5>
          </div>
        </div>

        <div id="general-info" >
          {/* <ul className="reveal">
            <li><Link to="/family" className="home-link">Family Law</Link></li>
            <li><Link to="/property" className="home-link">Real Property</Link></li>
            <li><Link to="/dui" className="home-link">DUI</Link></li>
            <li><Link to="/criminaldefense" className="home-link">Criminal Defense</Link></li>
          </ul> */}
          <div className="card-container">
            <div className="card">
              <h3>Family Law</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat?</p>
            </div>

            <div className="card">
              <h3>Real Property Law</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat?</p>
            </div>

            <div className="card">
              <h3>DUI Law</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat?</p>
            </div>

            <div className="card">
              <h3>Criminal Defense Law</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat?</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
