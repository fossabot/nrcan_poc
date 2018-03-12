import { shallow } from 'enzyme'
import React from 'react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders a semantic element', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.is('footer')).toBeTruthy()
  })
})
