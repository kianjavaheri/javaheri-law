import React from 'react'
import './../styling/pages/Contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <div>
      <div id="contact-wrapper">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.4687240098406!2d-121.87925572414093!3d37.661692572014104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe970630ab06f%3A0x10d7e0502fce8bbc!2s555%20Peters%20Ave%2C%20Pleasanton%2C%20CA%2094566!5e0!3m2!1sen!2sus!4v1673514814128!5m2!1sen!2sus" width="600" height="450" style={{border: "0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div id="contact-info-wrapper">

          <div className="contact email">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
            <h3>+1 925-989-4200</h3>
          </div>

          <div className="contact fax">
            <FontAwesomeIcon icon={faFax} size="3x" />
            <h3>888-243-0666</h3>
          </div>

          <div className="contact phone">
            <FontAwesomeIcon icon={faPhone} size="3x"/>
            <h3>javaherilaw@yahoo.com</h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact