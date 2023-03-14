import React from 'react'
import { Link } from "react-router-dom"
import '../styling/pages/Home.css'
import supreme from './../util/imgs/supreme_court.jpg'

function Home() {

  return (
    <div>
      <div id="home-wrapper">
        <div id="heading">
          <img src={supreme} alt="Supreme Court Banner" />
          <div id="gradient"></div>
          <div id="heading-text">
            <h1>Law Offices of Ali J. Javaheri</h1>
            <h5>A Professional Law Corporation</h5>
          </div>
        </div>

        <div id="general-info" >
          
          <div className="card-container">
            
            <Link to="/family" className="home-link">
              <div className="card">
                <h3>Family Law</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat?</p>
              </div>
            </Link>

          <Link to="/property" className="home-link">
              <div className="card">
                <h3>Real Property Law</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat?</p>
              </div>
          </Link>

          <Link to="/dui" className="home-link">
            <div className="card">
              <h3>DUI Law</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat?</p>
            </div>
          </Link>

          <Link to="/criminaldefense" className="home-link">
            <div className="card">
              <h3>Criminal Defense Law</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat?</p>
            </div>
          </Link>

          </div>
        </div>

        <div id="quick-about">
          <h1>Why Ali?</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat ex nostrum, ut soluta odit, quam nulla tempora maiores itaque tenetur aspernatur ullam dolorem! Fuga possimus quo soluta ex numquam nobis ducimus quasi accusantium. Nesciunt perspiciatis eligendi ducimus molestias tempora explicabo laborum fuga! Maiores quibusdam officia voluptates culpa maxime voluptas, ea fugit minima non cupiditate consequatur ipsam facere ipsa iste ducimus minus soluta et dignissimos pariatur ut itaque voluptatum vitae? Eos, amet explicabo autem nostrum eaque culpa quam a suscipit.</p>
        </div>

      </div>
    </div>
  )
}

export default Home
