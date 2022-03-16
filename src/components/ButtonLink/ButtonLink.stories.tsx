import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonLink from './ButtonLink'

export default {
  title: "WiseChimpComponentLibrary/ButtonLink",
  component: ButtonLink,
} as ComponentMeta<typeof ButtonLink>

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />

export const ContactUs = Template.bind({})

ContactUs.args = {
  target: "https://swedenrugbyleague.com/contact",
  text: "Contact Us"
}

export const ClickMe = Template.bind({})

ClickMe.args = {
  target: "https://swedenrugbyleague.com",
  text: "Click Me"
}