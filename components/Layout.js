import Head from 'next/head'
import React from 'react'
import AlphaBanner from '../components/AlphaBanner'
import FederalBanner from '../components/FederalBanner'
import Footer from '../components/Footer'
import Link from 'next/link'

const layoutStyle = {}

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>{props.title || 'EnerGuide API'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <AlphaBanner />
      <FederalBanner />
    </header>

    <main role="main">{props.children}</main>
    <Footer />
  </div>
)

export default Layout
