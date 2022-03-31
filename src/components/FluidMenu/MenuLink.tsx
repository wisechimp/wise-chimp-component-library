import React from 'react'

interface MenuLinkProps {
  key: number,
  to: string,
  linkText: string
}

const MenuLink = ({ to, linkText }: MenuLinkProps) => <a href={to}>{linkText}</a>

export default MenuLink