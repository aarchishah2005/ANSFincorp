import React from 'react';
import './LogoScroller.css';
import Growth_Parter_1 from '../../assets/images/Growth_Partner/Growth_Partner_1.jpeg';
import Growth_Parter_2 from '../../assets/images/Growth_Partner/Growth_Partner_2.jpeg';
import Growth_Parter_3 from '../../assets/images/Growth_Partner/Growth_Partner_3.jpeg';
import Growth_Parter_4 from '../../assets/images/Growth_Partner/Growth_Partner_4.jpeg';
import Growth_Parter_5 from '../../assets/images/Growth_Partner/Growth_Partner_5.jpeg';
import Growth_Parter_6 from '../../assets/images/Growth_Partner/Growth_Partner_6.jpeg';
import Growth_Parter_7 from '../../assets/images/Growth_Partner/Growth_Partner_7.jpeg';
import Growth_Parter_8 from '../../assets/images/Growth_Partner/Growth_Partner_8.jpeg';
import Growth_Parter_9 from '../../assets/images/Growth_Partner/Growth_Partner_9.jpeg';

const GrowthPartenerLogoScroller = () => {
    const logos = [
        Growth_Parter_1,
        Growth_Parter_2,
        Growth_Parter_3,
        Growth_Parter_4,
        Growth_Parter_5,
        Growth_Parter_6,
        Growth_Parter_7,
        Growth_Parter_8,
        Growth_Parter_9
    ];

    return (
        <section className="logo-scroller-section">
            {/* Section Header */}
            <div className="scroller-header">
                <h2 className="scroller-title">
                    <span className="title-accent">Our Growth Partners</span>
                </h2>
                <p className="scroller-description">
                    We collaborate with trusted banks, financial institutions, and insurance partners to deliver reliable and transparent financial solutions.
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

export default GrowthPartenerLogoScroller;