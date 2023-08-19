import './nav.css';
import { Link } from 'react-router-dom';
import React from 'react';
import megaLogo from '../../assets/megaLogo.png';

export default function Nav() {
    return (
        <div id="nav">
            <img
                id="megaLogo"
                src={megaLogo}
                alt="megaLogo"
            />
            <ul id="links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/scheduling">Appointment Setter</Link>
                </li>
            </ul>
        </div>
    );
}
