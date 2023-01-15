import React from 'react'
import './../styling/pages/Home.css'
import supreme from './../util/imgs/supreme_court.jpg'

function Home() {
  return (
    <div>
      <div id="home-wrapper">
        <div id="heading">
          <img src={supreme} alt="Supreme Court Banner" />
          <div id="gradient"></div>
          <h1>Law Offices of Ali J. Javaheri</h1>
        </div>
        <div id="general-info">
        </div>
      </div>
    </div>
  )
}

export default Home