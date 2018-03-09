import { shallow } from 'enzyme'
import React from 'react'

import App from '../pages/index.js'

describe('IndexPage', () => {
  it('shows "Fully-automated luxury deployments!"', () => {
    const app = shallow(<App />)
    expect(app.find('p').text()).toEqual('Fully-automated luxury deployments!')
  })
})
