import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer>
                <div className="foot">
                <img src="https://assets.zyrosite.com/stornowayj2oil/STORNOWAY-mp8BzrvVN6U1ZJEn.svg" alt=""></img>
                <p>Muller Strasse 34, 74133</p>
                <p>Hamburg, Germany</p>
                <div className="foot1">
                <p> +18187882178</p>
                <p> info@stornoway.com</p>
                </div>
                </div>
        </footer>
    </div>
  )
}

export default Footer;