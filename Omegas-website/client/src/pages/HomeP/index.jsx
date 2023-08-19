import './home.css';
import React from 'react';
import omega from '../../assets/omega.jpg';
import omegaProducing from '../../assets/omegaProducing.jpg';
import omegaEngineering from '../../assets/omegaEngineering.jpg';

export default function Home() {
    return (
        <div id="home">
            <section id="title">
                <h1>Omega Studios</h1>
            </section>

            <section id="services">
                <section id="link1">
                    <h1>Engineering</h1>
                    <img
                        class="images"
                        src={omegaEngineering}
                        alt="Omeeegaaaa"
                    />
                    <p class="descriptions">engineering services description</p>
                </section>

                <section id="link2">
                    <h1>Producing</h1>
                    <img
                        class="images"
                        src={omegaProducing}
                        alt="Omeeegaaaa"
                    />
                    <p class="descriptions">Producing services description</p>
                </section>
            </section>
            <br />

            <section id="aboutInfo">
                <img
                    class="images"
                    src={omega}
                    alt="Omeeegaaaa"
                />
                <h1>"Mr. Make It Happen"</h1>
                <p class="descriptions">About Me: </p>
            </section>
        </div>
    );
}
