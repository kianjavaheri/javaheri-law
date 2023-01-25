import React from 'react'
import './../styling/pages/About.css'
import ali from './../util/imgs/ali.png'

function About() {

  return (
    <div>
      <div id="about-wrapper">

        <div id="about">
          <div id="about-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, incidunt voluptatibus et ipsam voluptatem, minima ullam, odio vero doloribus quod labore at exercitationem nulla nam. Cupiditate quis reprehenderit placeat dolorem ad cum magnam accusamus praesentium autem omnis, ducimus labore ab voluptatum, nulla architecto. Officia velit suscipit voluptas ea rerum doloribus repellendus asperiores quas, fuga autem aliquam eaque provident! Praesentium explicabo maiores consequuntur eveniet, rem quae repellat quibusdam ea assumenda at totam, accusamus molestiae dicta exercitationem nobis optio, incidunt illo reprehenderit!</p>
          </div>
        </div>

        <div id="memberships">
          <h3>Memberships</h3>
          <div id="card-container">
            <div className="card">
              <h4>State Bar of California</h4>
            </div>

            <div className="card">
              <h4>United States District Court, Northern District of California</h4>
            </div>

            <div className="card">
              <h4>American Bar Association</h4>
            </div>

            <div className="card">
              <h4>Alameda County Bar Association</h4>
            </div>

            <div className="card">
              <h4>Contra Costa County Bar Association</h4>
            </div>

            <div className="card">
              <h4>Real Estate Broker, California Department of Real Estate</h4>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About