import './adds.css'
import porscheLogo from '../../assets/porsche-logo.png'
import arrowUp from '../../assets/arrow-up-icon.png'
import React from 'react'


const adds = () => {
  return (
    <div className='adds-page'>
        <div className="adds-container">
            <div className="upper-block">
                <div className="upper-block-text">
                    <p className='adds-text-upper'>Provider</p>
                    <p className='adds-text-upper'>Legal Notice</p>
                    <p className='adds-text-upper'>Settings</p>
                    <p className='adds-text-upper'>Privacy</p>
                    <p className='adds-text-upper'>Contact</p>
                </div>
                <p className='adds-text-upper-author'>Author: Maxim Kokorev</p>
                <p className='adds-text-upper-copyright'>This site is just a fan concept and is not a real Porsche site. 
                    All rights belong to the copyright holders, and images are taken from open sources. 
                    The author of the website has no affiliation with Porsche or its representatives.
                </p>
            </div>
            <div className="bottom-block">
                <div className="bottom-line">

                </div>
                <img src={porscheLogo} alt="logo" className='porsche-logo' />
                <div className="scroll-block">
                    <img src={arrowUp} alt="arrow-icon" className='button-to-top' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>
                    <p>Top</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default adds