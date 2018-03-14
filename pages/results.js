import React from 'react'
import { hydrate } from 'react-emotion'
import Layout from '../components/Layout'
import ResultsList from '../components/ResultsList'
import withData from '../lib/withData'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
  hydrate(window.__NEXT_DATA__.ids)
}

const getHouseId = url => url.query.houseId || '189250'

const ResultsPage = withData(({ url }) => (
  <Layout title={`Results for file id: ${getHouseId(url)}`}>
    <h1>{`Results for file id: ${getHouseId(url)}`}</h1>
    <ResultsList query={url.query} />
  </Layout>
))

export default ResultsPage
