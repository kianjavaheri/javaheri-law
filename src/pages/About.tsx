import React from 'react'
import './../styling/pages/About.css'
import ali from './../util/imgs/ali.png'

function About() {
  return (
    <div>
      <div id="about-wrapper">
        <div id="text-wrapper">
          <div id="about">
            
            <div id="about-content">
              <div id="text-content">
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, incidunt voluptatibus et ipsam voluptatem, minima ullam, odio vero doloribus quod labore at exercitationem nulla nam. Cupiditate quis reprehenderit placeat dolorem ad cum magnam accusamus praesentium autem omnis, ducimus labore ab voluptatum, nulla architecto. Officia velit suscipit voluptas ea rerum doloribus repellendus asperiores quas, fuga autem aliquam eaque provident! Praesentium explicabo maiores consequuntur eveniet, rem quae repellat quibusdam ea assumenda at totam, accusamus molestiae dicta exercitationem nobis optio, incidunt illo reprehenderit!
                  </p>
              </div>
              <div id="image-content">
                <img src={ali} alt="Ali Headshot"></img>
              </div>
              </div>

            <div id="memberships">
              <h1>Memberships</h1>
              <ul>
                <li>State Bar of California</li>
                <li>United States District Court, Northern District of California</li>
                <li>American Bar Association</li>
                <li>Alameda County Bar Association</li>
                <li>Contra Costa County Bar Association</li>
                <li>Real Estate Broker, California Department of Real Estate</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About