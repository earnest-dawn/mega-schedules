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
                    <section class="descriptions">
                        <h3>engineering services description</h3>
                        <p>
                            <h4 class="serviceInfo">Services:</h4>
                            <br />
                            <h4 class="serviceInfo">Costs:</h4>
                        </p>
                    </section>
                </section>

                <section id="link2">
                    <h1>Producing</h1>
                    <img
                        class="images"
                        src={omegaProducing}
                        alt="Omeeegaaaa"
                    />
                    <section class="descriptions">
                        <h3>Producing services description</h3>
                        <p>
                            <h4 class="serviceInfo">Services:</h4>
                            <br />
                            <h4 class="serviceInfo">Costs:</h4>
                        </p>
                    </section>
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
                <section class="descriptions">
                    <h3>About Me:</h3>
                    services: costs: "Experienced Producer and Engineer Shaping
                    Sonic Landscapes With years dedicated to the craft of music
                    production and engineering, I have honed a profound ability
                    to translate artistic visions into captivating audio
                    realities. Seamlessly blending technical finesse with
                    artistic intuition, I've woven intricate soundscapes that
                    traverse genres and resonate deeply. As a producer, I've
                    crafted melodies and harmonies that tell evocative stories,
                    while my engineering expertise has transformed these visions
                    into perfectly balanced sonic masterpieces. Every project is
                    an opportunity to collaboratively create immersive
                    experiences that linger in the minds and hearts of listeners
                    long after the last note fades."{' '}
                </section>
            </section>
        </div>
    );
}
