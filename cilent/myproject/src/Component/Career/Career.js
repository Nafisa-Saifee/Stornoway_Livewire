import React from 'react';
import './Career.css';
import {NavLink} from 'react-router-dom'

const Career = () => {
  return (
    <div>
        <header>
        <img className="care-image" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/careers_image-A3QyB0Q115ck0Kb2.png" alt=""></img>
        <h1 className="care-head">Careers</h1>
        
        </header>
        <main>
                <div className="position">
                        <h1 className="post-header">Open Positions</h1>
                        <h2>01</h2>
                        <h3><NavLink to='/Health'>Health and Safety Coordinate-Hamburg,Germany</NavLink></h3>
                        <p>FULL-TIME</p>
                        <h2>02</h2>
                        <h3><NavLink to ='/Construction'>Construction Safety Manager-Hamburg,Germany</NavLink></h3>
                        <p>FULL-TIME</p>
                        <h2>03</h2>
                        <h3><NavLink to ='/Engine'>Construction Engineer-Hamburg,Germany</NavLink></h3>
                        <p>FULL-TIME</p>
                </div>
        </main>

    </div>
  )
}

export default Career;