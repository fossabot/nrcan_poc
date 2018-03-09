import { shallow } from 'enzyme'
import React from 'react'

import App from '../pages/search-location.js'

describe('SearchLocationPage', () => {
  it('shows "Search by location"', () => {
    const app = shallow(<App />)
    expect(app.find('h1').text()).toEqual('Search by location')
  })
})
