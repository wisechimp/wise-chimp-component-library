import React, { MouseEventHandler } from 'react'

import './hamburger.scss'

interface HamburgerProps {
  flipper: MouseEventHandler,
  flippingBurger: boolean
}

const Hamburger = ({ flipper, flippingBurger }: HamburgerProps ) => (
  <button 
    className={!flippingBurger ? "hamburger" : "hamburger change"} 
    onClick={flipper} 
    aria-label='Menu reveal'
  >
    <div className='hamburgerBunTop'/>
    <div className='hamburgerMeat'/>
    <div className='hamburgerBunBottom'/>
  </button>
)

export default Hamburger