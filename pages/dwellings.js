import React from 'react'
import { hydrate } from 'react-emotion'
import Layout from '../components/Layout'
import DwellingsList from '../components/DwellingsList'
import withData from '../lib/withData'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
  hydrate(window.__NEXT_DATA__.ids)
}

const getFileId = url => url.query.fileId || '3C10E11075'

const DwellingsPage = withData(({ url }) => (
  <Layout title={`Results for file id: ${getFileId(url)}`}>
    <h1>{`Results for file id: ${getFileId(url)}`}</h1>
    <DwellingsList query={url.query} />
  </Layout>
))

export default DwellingsPage
