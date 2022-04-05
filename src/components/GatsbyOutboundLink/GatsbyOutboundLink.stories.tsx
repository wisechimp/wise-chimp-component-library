import React from 'react'
import { ComponenStory, ComponentMeta } from '@storybook/react'
import GatsbyOutboundLink from './GatsbyOutboundLink'

export default {
  title: "WiseChimpComponentLibrary/GatsbyOutboundLink",
  component: GatsbyOutboundLink,
} as ComponentMeta<typeof GatsbyOutboundLink>

const Template: ComponenStory<typeof GatsbyOutboundLink> = (args) => <GatsbyOutboundLink {...args}/>

export const GenericGatsbyOutboundLink = Template.bind({})

GenericGatsbyOutboundLink.args = {
  link: "https://swedenrugbyleague.com",
  linkText: "Outbound Link",
}