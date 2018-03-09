import { mount } from 'enzyme'
import React from 'react'

import App from '../pages/search.js'

describe('SearchPage', () => {
  it('shows "Which parameter would you like to search by?"', () => {
    const app = mount(<App />)
    expect(app.find('h1').text()).toEqual(
      'Which parameter would you like to search by?',
    )
  })
})
