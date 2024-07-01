import './about.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import wal2 from '../../assets/car5.jpg'
import arrow1 from '../../assets/right-arrow.svg'
import chargeIcon from '../../assets/charge-icon.png'
import gasIcon from '../../assets/gas-icon.png'
import leafIcon from '../../assets/leaf-icon.png'
import React from 'react'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        gsap.to(".highline-headline", {
        duration: 1,
        opacity: 1,
        y: -10,
        scrollTrigger: { trigger: ".highline-bottom"},
      })
    });


  return (
    <div className='about-page'>
        <div className="about-container">
            <div className="media-container">
                <img src={wal2} alt="media" />
            </div>
            <div className="text-content">
                <div className="highlight-overline">
                Experience design that's classic and contemporary, timeless and forward-thinking.
                </div>
                <div className="highline-headline">
                    Masterpiece.
                </div>
                <div className="highline-bottom">
                    <p>
                    The Porsche is for those who use freedom to follow their instincts. Who express themselves in the way they travel, not just in reaching their destination. Who make decisions based on their own desires and not what others think. We built this sports car for exactly these people.
                    </p>
                        <div className="highline-bottom-text">
                            <span className='highline-bottom-legend-item'>
                                <img src={chargeIcon} alt="charge-icon" />
                                <p className='icon-text'>Energy consuption combined</p>
                            </span>
                            <span className='highline-bottom-legend-item'> 
                                <img src={gasIcon} alt="gas-icon" />
                                <p className='icon-text'>Fuel consuption combined</p>
                            </span>
                            <span className='highline-bottom-legend-item'>
                                <img src={leafIcon} alt="leaf-icon" />
                                <p className='icon-text'>CO2-emissions combined</p>
                            </span>
                        </div>
                <p className="highline-bottom-btn">
                    Discover More
                    <img src={arrow1} alt="arrow-icon" className='arrow-icon'/>
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About