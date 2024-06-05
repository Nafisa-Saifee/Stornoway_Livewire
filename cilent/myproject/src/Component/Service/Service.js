import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div>
        <header>
        <img className="serv-image" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/services-A3QyBgglPrso0Vbv.png" alt=""></img>
        <h1 className="serv-head">SERVICES</h1>
                               
        </header> 
        <main>
                <h1 className="detah"> Stornoway specializes in commercial construction work but boasts a wide portfolio covering also industrial and residential projects.</h1>
                <div className="deta">
                <div className="view">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=630,fit=crop/stornowayj2oil/Rectangle-mk3Nl8q7JNhe7NlW.png" alt=""></img>
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=630,fit=crop/stornowayj2oil/Rectangle-ALpj8Be16JHnMGr0.png" alt=""></img>
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=630,fit=crop/stornowayj2oil/Rectangle-mv0MLEMEwPSnX63R.png" alt=""></img>
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=630,fit=crop/stornowayj2oil/Rectangle-AoPaDZJlXru7X5Jw.png" alt=""></img>
                </div>
                <div className="spec">
                      <h1>01</h1>
                      <h2>Industrial Construction</h2>
                      <p> We believe that industrial construction doesn’t have to be boring and an eyesore in the neighborhood. Instead, our in-house architecture team looks at how best to include or blend your industrial project into the surrounding area.</p>
                      <h1>02</h1>
                      <h2>Residential Construction</h2>
                      <p>When it comes to our residential construction projects, we place particular emphasis on discourse with the local authorities to ensure that the development plans for the project are met and executed with care.</p>
                      <h1 className='spech3'>03</h1>
                      <h2>Commercial Construction</h2>
                      <p>Our clients praise our full-scale project management and complete construction capabilities as our main strengths. We will look after your commercial project from conception to plastering, electrical work, and everything else in-between.</p>
                      <h1 className='spech4'>04</h1>  
                      <h2>Design & Architecture</h2>
                      <p> Stornoway’s residential design and architecture team makes us different from our competitors. We can look after your construction project from start to finish with no loss in communication on the way.</p>
                </div>
                 </div>
                 <div className="contig">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/contact_us_image-AGB0qOpEMec72aep.png" alt=""></img>
                        <div className="final">
                        <h1>Contact Us</h1>
                        <p>Get in touch with our consultants today to make your construction dream a reality.</p>
                        <button className="click-serv"><a href="contact.html">Contact Us</a></button>
                        </div>
                 </div>
        </main>
    </div>
  )
}

export default Service;