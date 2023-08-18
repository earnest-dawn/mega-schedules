import './nav.css';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Nav() {
    return (
        <div id="nav">
            <ul>
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
