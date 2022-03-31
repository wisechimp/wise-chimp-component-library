import React, { useState } from 'react'

import Hamburger from './Hamburger'
import MenuLink from './MenuLink'

import './fluidmenu.scss'

interface MenuLinkObject {
  key: number,
  to: string,
  linkText: string
}

interface FluidMenuProps {
  pageTitle: string
  menuLinks: Array<MenuLinkObject | Array<MenuLinkObject>>
}

const Menu = ({ pageTitle, menuLinks }: FluidMenuProps) => {
  const [flippingBurger, setFlippingBurger] = useState(false)

  const drawerHandler = () => {
    if (flippingBurger) {
      return setFlippingBurger(false)
    }
    setFlippingBurger(true)
  }

  const buildMenuLink = (menuLink: MenuLinkObject) => {
    return <MenuLink
      key={menuLink.key}
      to={menuLink.to}
      linkText={menuLink.linkText}
    />
  }

  return (
    <div className="actionBar">
      <div className="pageTitlePosition">
        <h3 className="pageTitle">{pageTitle}</h3>
      </div>
      <Hamburger
        flipper={drawerHandler}
        flippingBurger={flippingBurger}
      />
      <div
        className={ !flippingBurger 
          ? "navUnit"
          : "navUnit open"
        }
      >
        <div className='menuContainer'>
          {menuLinks.map(menuLink => {
            if (Array.isArray(menuLink)) {
              menuLink.map(subMenuLink => {
                <div className='navLinks'>
                  {buildMenuLink(subMenuLink)}
                </div>
              })
            } else {
              <div className='navLinks'>
                {buildMenuLink(menuLink)}
              </div>
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Menu