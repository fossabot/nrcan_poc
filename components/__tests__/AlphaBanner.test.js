import { shallow } from 'enzyme'
import React from 'react'

import AlphaBanner from '../AlphaBanner'

describe('AlphaBanner', () => {
  it('can be instantiated', () => {
    const banner = shallow(<AlphaBanner />)
    expect(banner.find('p').text()).toMatch(/Alpha/)
  })
})
