import React  from 'react'
import './explore.css'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import car4 from '../../assets/car4.jpg'
import car6 from '../../assets/car6.jpg'
import car7 from '../../assets/car7.jpg'
import wal4 from '../../assets/wal4.jpg'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);




const Explore = () => {

    useGSAP(() => {
        gsap.to(".explore-page-animated-text", {
        duration: 1,
        opacity: 1,
        y: -10,
        scrollTrigger: { trigger: ".explore-desription-add"},
      })
    });


    

  return (
<div className="explore-page"> 
    <h1 className='explore-page-animated-text'>Explore.</h1>
    <div className='explore-container'>
        <div className="explore-objects">
            <h4 className="explore-desription">
                Iconic
            </h4>
            <h2 className="explore-desription-add">
                Making a History since 1930s.
            </h2>
            <img src={car4} alt="car-image-4" className='car-images'/>
        </div>
        <div className="explore-objects">
        <h4 className="explore-desription">
                Entering a new century
            </h4>
            <h2 className="explore-desription-add">
                Explore New Technologies Yourself.
            </h2>
            <img src={car6} alt="car-image-6" />
        </div>
        <div className="explore-objects">
        <h4 className="explore-desription">
                Fellings
            </h4>
            <h2 className="explore-desription-add">
                The Pure Expression of an New Electric Sports Car.
            </h2>
            <img src={car7} alt="car-image-7" />
        </div>
        <div className="explore-objects">
        <h4 className="explore-desription">
                Vehicles
            </h4>
            <h2 className="explore-desription-add">
                Welcome to Beyond.
            </h2>
            <img src={wal4} alt="wal-image4" />
        </div>
        <div className="mobile-margin-bottom"></div>
    </div>
</div>
    
  )
}



export default Explore