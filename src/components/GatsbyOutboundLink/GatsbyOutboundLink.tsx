import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

interface GatsbyOutboundLinkProps {
  link: string,
  linkText: string
}

const GatsbyOutboundLink = ({ link, linkText }: GatsbyOutboundLinkProps) => {
  
  return (
  <OutboundLink 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {linkText}
  </OutboundLink>
)}

export default GatsbyOutboundLink