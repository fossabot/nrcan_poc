import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Fully-automated luxury deployments!"', () => {
    const app = shallow(<App />)

    expect(app.find('p').text()).toEqual('Fully-automated luxury deployments!')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Fully-automated luxury deployments!"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
