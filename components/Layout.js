import React from 'react'
import AlphaBanner from '../components/AlphaBanner'
import FederalBanner from '../components/FederalBanner'
import Footer from '../components/Footer'
import Link from 'next/link'

const layoutStyle = {

}

const Layout = (props) => (

    <div style={layoutStyle}>
      <header>
				<AlphaBanner />
				<FederalBanner />
			</header>

		  <main role="main">
      {props.children}
			</main>
			<Footer />
    </div>
)

export default Layout
