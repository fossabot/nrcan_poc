import React from 'react'
import { hydrate } from 'react-emotion'
import AlphaBanner from '../components/AlphaBanner'
import Link from 'next/link'
import { GoCSignature } from '@cdssnc/gcui'
import Footer from '../components/Footer'

import DwellingsList from '../components/DwellingsList'
import withData from '../lib/withData'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
  hydrate(window.__NEXT_DATA__.ids)
}

const DwellingsPage = withData(({ url }) => (
  <div>
    <DwellingsList query={url.query} />
  </div>
))

export default DwellingsPage
