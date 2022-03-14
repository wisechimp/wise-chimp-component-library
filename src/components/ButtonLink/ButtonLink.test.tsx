import React from 'react'
import { render } from '@testing-library/react'

import ButtonLink from './ButtonLink'

describe("ButtonLink", () => {
  test("renders the ButtonLink component", () => {
    render(<ButtonLink target='https://skanestags.com' text='Stag Off' />)
  })
})