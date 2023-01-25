import React from 'react'
import './../styling/pages/Family.css'
import family_law from './../util/imgs/family_law.jpg'

function Family() {
  return (
    <div>
      <div id="family-wrapper">
        <div id="family-content">
          <div id="image-content">
            <img src={family_law} alt="Family Law" />
          </div>
          <div id="text-content">
            <h1>Family Law</h1>
            <ul>
              <li>Dissolution of Marriage</li>
              <li>Child Custody and visitation</li>
              <li>Spousal and child support</li>
              <li>Domestic Violence, restraining orders</li>
              <li>Property Divisions</li>
              <li>Division of Pension and retirement plans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Family