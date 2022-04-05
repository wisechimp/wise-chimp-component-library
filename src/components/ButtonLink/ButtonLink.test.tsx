import React from 'react'
import { screen, render, getByRole } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ButtonLink from './ButtonLink'

describe("ButtonLink", () => {
  test("renders the ButtonLink component", () => {
    render(<ButtonLink target='https://skanestags.com' text='Stag Off' />)

    screen.debug()

    const buttonLink = screen.getByRole('link')
    expect(buttonLink).toHaveAttribute('href', 'https://skanestags.com')
  });

  test("link has a href", () => {
    render(<ButtonLink target='https://skanestags.com' text='Stag Off' />)

    screen.debug()

    const buttonLink = screen.getByRole('link')
    expect(buttonLink).toHaveAttribute('href', 'https://skanestags.com')
  })
})