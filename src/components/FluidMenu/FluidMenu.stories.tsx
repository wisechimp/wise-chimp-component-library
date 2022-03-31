import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FluidMenu from './FluidMenu'

export default {
  title: "WiseChimpComponentLibrary/FluidMenu",
  component: FluidMenu,
} as ComponentMeta<typeof FluidMenu>

const Template: ComponentStory<typeof FluidMenu> = (args) => <FluidMenu {...args}/>

export const GenericFluidMenu = Template.bind({})

GenericFluidMenu.args = {
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