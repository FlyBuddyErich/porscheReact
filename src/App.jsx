import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Explore from "./Components/Explore/Explore";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Сontact";
import Adds from "./Components/Adds/adds";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


const App = () => {
  let heroData = [
    {text1:"Dive Into", text2:"What You Love"},
    {text1:"Dive Into", text2:"What You Love"},
    {text1:"Dive Into", text2:"What You Love"},
  ]

  const [heroCount,setHeroCount] = useState(0); 
  const [playStatus,setPlayStatus] = useState(false);


/*  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);             -  AUTO CHANGING PICS EVERY 3 SEC

  }, [])
*/


  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Explore />
      <About />
      <Contact />
      <Adds />
    </div>
  )
}

export default App