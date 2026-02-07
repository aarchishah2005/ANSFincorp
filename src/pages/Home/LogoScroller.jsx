import React from 'react';
import './LogoScroller.css';
import Client1 from '../../assets/images/Client/Client_1.jpeg';
import Client2 from '../../assets/images/Client/Client_2.jpeg';
import Client3 from '../../assets/images/Client/Client_3.jpeg';
import Client4 from '../../assets/images/Client/Client_4.jpeg';
import Client5 from '../../assets/images/Client/Client_5.jpeg';
import Client6 from '../../assets/images/Client/Client_6.jpeg';
import Client7 from '../../assets/images/Client/Client_7.jpeg';
import Client8 from '../../assets/images/Client/Client_8.jpeg';
import Client9 from '../../assets/images/Client/Client_9.jpeg';


const LogoScroller = () => {
    const logos = [
        Client1,
        Client2,
        Client3,
        Client4,
        Client5,
        Client6,
        Client7,
        Client8,
        Client9
    ];

    return (
        <section className="logo-scroller-section">
            {/* Section Header */}
            <div className="scroller-header">
                <h2 className="scroller-title">
                    <span className="title-accent">Our Clients</span>
                </h2>
                <p className="scroller-description">
                    Our growing client network reflects our commitment to trust, performance, and long-term financial partnerships.
                </p>
            </div>


            {/* Logo Scroller */}
            <div className="logo-container">
                {/* Gradient Overlays */}
                <div className="gradient-overlay gradient-left"></div>
                <div className="gradient-overlay gradient-right"></div>

                {/* Scrolling Track */}
                <div className="logo-track">
                    {/* First Set */}
                    {logos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="logo-card">
                            <div className="logo-card-inner">
                                <img
                                    src={logo}
                                    alt="Partner Financial Institution"
                                    className="logo"
                                />
                            </div>
                        </div>
                    ))}

                    {/* Second Set (duplicate for seamless loop) */}
                    {logos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="logo-card">
                            <div className="logo-card-inner">
                                <img
                                    src={logo}
                                    alt="Partner Financial Institution"
                                    className="logo"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoScroller;