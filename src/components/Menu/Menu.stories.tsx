import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './Menu'

export default {
  title: "WiseChimpComponentLibrary/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args}/>

export const GenericMenu = Template.bind({})

GenericMenu.args = {
  pageTitle: "Generic Project",
  menuLinks: [
    {
      key: 1,
      to: "http://www.bbc.co.uk",
      linkText: "Link 1"
    },
    {
      key: 2,
      to: "http://www.bbc.co.uk",
      linkText: "Link 2"
    },
    [
      {
        key: 3,
        to: "http://www.bbc.co.uk",
        linkText: "Link 3"
      },
      {
        key: 4,
        to: "http://www.bbc.co.uk",
        linkText: "Link 4"
      }
    ]
  ]
}