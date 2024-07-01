import './contact.css'
import wal3 from '../../assets/wal3.jpg'
import searchIcon from '../../assets/search-icon.png'
import porsche from "../../assets/porsche-car2.png"
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const Сontact = () => {

  useGSAP(() => {
    gsap.to(".highline-text", {
    duration: 1,
    opacity: 1,
    y: -10,
    scrollTrigger: { trigger: ".contact-adds"},
  })
});

  useGSAP(() => {
    gsap.to(".highline-preown-text", {
    duration: 1,
    x: 10,
    opacity: 1,
    scrollTrigger: { trigger: ".contact-adds"},
  })
  });

  useGSAP(() => {
    gsap.to(".highline-desription-text", {
    duration: 1,
    x: 10,
    opacity: 1,
    delay: 1,
    scrollTrigger: { trigger: ".contact-adds"},
  })
  });

  return (
    <div className='contact-page'>
        <div className="contact-container-main">
        <p className='highline-text'>Pre-Own.</p>
          <img src={porsche} alt="porsche-car" className='porsche-image'/>
          <p className='highline-preown-text'>Pre-Own New Electic Porsche</p>
          <p className='highline-desription-text'>Locate your nearest Porsche Centre and explore the range of New and Pre-Owned vehicles.</p>
          <div className="contact-adds">
              <p>Find your nearest Porsche Centre</p>
              <div className="wrapper">
                <img src={searchIcon} alt="search-icon" className='search-icon' />
                <input type="search" placeholder='Enter City or Postal Code'className='search-box'/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Сontact
