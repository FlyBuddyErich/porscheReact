import './Hero.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import arrow1 from '../../assets/right-arrow.svg'
import arrow_btn_2 from '../../assets/arrow-down-icon.png'
import play_icon from '../../assets/play-icon.png'
import pause_icon from '../../assets/pause-icon.png'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {

  useGSAP(() => {
    gsap.to(".hero-text", {
      y: -10,
      duration: 1.2,
      opacity: 1,
      delay: 0.5,
    })
  });

  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
    <div className="hero-explore">
      <p className='explore-btn'>Explore the features</p>
      <img src={arrow1} alt="" className='arrow-right-icon'/>
    </div>
    <div className="hero-dot-play">
      <ul className="hero-dots">
        <li onClick={() =>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
        <li onClick={() =>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
        <li onClick={() =>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
      </ul>
      <div className="hero-play">
        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" className='play-and-pause-icon'/>
        <p>Play video</p>
      </div>
    </div>
    </div>
  )
}



export default Hero
