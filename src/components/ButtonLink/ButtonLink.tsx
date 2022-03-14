import React from 'react'

import './buttonlink.css'

interface ButtonLinkProps {
  target: string,
  text: string
}

const ButtonLink = ({ target, text }: ButtonLinkProps) => {
 <div className='.buttonLink'>
   <a href={target}>{text}</a>
 </div>
}

export default ButtonLink