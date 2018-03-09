import { shallow } from 'enzyme'
import React from 'react'

import App from '../pages/index.js'

describe('IndexPage', () => {
  it('shows "EnerGuide API"', () => {
    const app = shallow(<App />)
    expect(app.find('h1').text()).toEqual('EnerGuide API')
  })
})
