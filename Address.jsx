import React from 'react';
import "components/contactPage/Address.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faInstagramSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import BudhaChachu from "assets/hyderabad.svg";

export default function Address() {
    return <div className="address">
        <h1>Vellore <img src={BudhaChachu} alt="Katpadi, Vellore" className="budha-chachu"/></h1>
        <h2>VIT Engineering College, Vellore.</h2>
        <a href="mailto:contact@vit.acm.org" target="blank" title="Contact Email ID">
            <h4><FontAwesomeIcon icon={faEnvelope}/> contact@vit.acm.org</h4>
        </a>
        <h2>Connect with Us</h2>
        <div className="socialLinks">
            <a href="https://www.linkedin.com/groups/13885592" title="Follow us on LinkedIn"
               target="blank">
                <FontAwesomeIcon icon={faLinkedin} size="3x" className="socialIcons linkedIn"/>
            </a>
            <a href="https://www.facebook.com/VIT-ACM-Student-Chapter-2372670922946786" title="Follow Us on facebook"
               target="blank">
                <FontAwesomeIcon icon={faFacebookSquare} size="3x" className="socialIcons fb"/>
            </a>
            <a href="https://www.instagram.com/vit_acm/" title="Follow Us on Instagram" target="blank">
                <FontAwesomeIcon icon={faInstagramSquare} size="3x" className="socialIcons insta"/>
            </a>
        </div>
    </div>
}