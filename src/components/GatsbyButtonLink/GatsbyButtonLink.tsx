import React from 'react'
import { Link } from 'gatsby'

import styles from './gatsbybuttonlink.module.css'

interface GatsbyButtonLinkProps {
  target: string,
  text: string
}

const ButtonLink = ({ target, text }: GatsbyButtonLinkProps) => {
 <div className={styles.gatsbyLinkButt}>
   <Link to={target}>{text}</Link>
 </div>
}

export default ButtonLink