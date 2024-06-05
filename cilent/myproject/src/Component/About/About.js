import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
        <header>
         <div>
        <img className="about-image" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/Group-mxByzx7eeNHVrGEd.png" alt=""></img>
        <h1>ABOUT</h1>
        </div>      
        </header>
        <main>
                        <div className="history">
                                <h5>Stornoway services and history</h5>
                                <p>Stornoway started as a statement against the sloppy professional standards that dominated the field of construction services 20 years ago. We wanted to set a new, high standard and work as consultants, solving our clients’ problems. </p>
                                <p className="hisp">The company quickly grew and cemented itself as the new golden standard in commercial construction. Today we continue to build on that legacy and strive for excellence at everything we do.</p>

                        </div>
                        <div className="culture">
                                <div className="images">
                                        <img className="img1" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=368,fit=crop/stornowayj2oil/Rectangle-AR0pelPw3gTGBODM.png" alt=""></img>
                                        <img className="img2" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=748,fit=crop/stornowayj2oil/oleg-laptev-KDawdoaC-ts-unsplash-m2WO1pgLRWhxByyq.jpg" alt=""></img>
                                </div>
                                <div className="content">
                                        <h2>Stornoway people and culture</h2>
                                        <p>Our people are what make us unique. Rather than outsourcing our construction engineers from questionable outsourcing establishments, we provide them with an environment that supports professional growth. </p>
                                        <p className="conp">At Stornoway, we are strong believers in giving our employees a voice. Our teams are put together with the help of our resident psychologist to ensure maximum productivity and engagement.</p>
                                </div>
                        </div>
        </main>
    </div>
  )
}

export default About;