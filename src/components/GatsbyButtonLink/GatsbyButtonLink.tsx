import React from 'react'
import { Link } from 'gatsby'

import './gatsbybuttonlink.css'

interface GatsbyButtonLinkProps {
  target: string,
  text: string
}

const ButtonLink = ({ target, text }: GatsbyButtonLinkProps) => {
 <div className='.gatsbyLinkButt'>
   <Link to={target}>{text}</Link>
 </div>
}

export default ButtonLink