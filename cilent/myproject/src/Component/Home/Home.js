import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div>
    <header>
    <img className="home-image" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/heroimage-A1aVeGeGzkheyzwj.png" alt=""></img>;
    <h1 className="home-head">QUALITY YOU CAN TRUST</h1>
    <button className="click"><a href="contact.html">Get a Quote</a></button>
    </header>
    <main>
                <div className="about">
                        <h2>ABOUT STORNOWAY</h2>
                        <p>Stornoway is a construction company with a long-standing reputation for excellence. We specialize in commercial property construction but have a small portfolio of industrial and residential properties. Currently, we cater to the German market, but are looking to expand internationally.</p>
                        <button className="read"><a href="about.html">READ MORE</a></button>
                </div>
                <div className="project">
                        <h1>POJECTS</h1>
                        <div className="img123">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=394,fit=crop/stornowayj2oil/Rectangle-AE03ELjjgaT18QRy.png" alt=""></img>
                        <img className="img2" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=394,fit=crop/stornowayj2oil/Rectangle-mp8BM5lRyjHRVVLK.png" alt=""></img>
                        <img className="img3"  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=394,fit=crop/stornowayj2oil/Rectangle-AE03EL80Wguk6LD5.png" alt=""></img>
                        </div>
                        <div>
                        <h5>Huawei HQ, Frankfurt</h5>
                        <h5 className="img2h">Rhein-Main Conference Centre, Wiesbaden</h5>
                        <h5 className="img3h">Danske Bank Offices, Hamburg</h5>
                        </div>
                        <button className="more"><a href="projects.html">See More</a></button>
                </div>
                <div className="Services">
                        <div className="serv1">
                                <h1>SERVICES</h1>
                                <p>Stornoway specializes in commercial construction, but over the years we have undertaken a number of projects in industrial and residential property construction. We are a flexible team with expertise in all aspects of construction work.</p>
                                <button className="servb"><a href="services.html">More Services</a></button>
                        </div>
                        <div className="serv2">
                                <h1>01</h1>
                                <h5>Commercial Construction</h5>
                                <h1>02</h1>
                                <h5>Industrial Construction</h5>
                                <h1>03</h1>
                                <h5>Residential Construction</h5>

                        </div>

                </div>
                <div className="careers">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/careers_image-dOqjMWK1qRT81QvX.png" alt=""></img>
                        <div className="cares">
                                <h1>CAREERS</h1>
                                <p>We are always looking for skilled construction professionals to join our team. If you think you’d make a good fit, have a look at our open positions, or leave an unsolicited application.</p>
                                <button className="open"><a href="careers.html">Open Positions</a></button>
                        </div>
                </div>
        </main> 
    </div>
  )
}

export default Home;