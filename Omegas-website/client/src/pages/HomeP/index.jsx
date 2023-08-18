import './home.css';
import React from 'react';
import megaLogo from '../../assets/megaLogo.png';
export default function Home() {
    return (
        <div id="home">
            <section id="titles">
                <img
                    id="megaLogo"
                    src={megaLogo}
                    alt="megaLogo"
                />
                <h1 class="title">Omega Studios</h1>
            </section>
            <section id="aboutInfo">
                <h1>About Him</h1>
            </section>
        </div>
    );
}
