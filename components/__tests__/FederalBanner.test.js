import { shallow } from 'enzyme'
import React from 'react'
import FederalBanner from '../FederalBanner'

describe('FederalBanner', () => {
  it('can be instantiated', () => {
    const banner = shallow(<FederalBanner />)
    expect(banner.find('a').text()).toMatch(/Francais/)
  })
})
