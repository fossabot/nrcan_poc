import React from 'react'
import { hydrate, injectGlobal } from 'react-emotion'
import AlphaBanner from '../components/AlphaBanner'
import Link from 'next/link'
import { GoCSignature } from '@cdssnc/gcui'
import Footer from '../components/Footer'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`

	html, body {
    padding: 0;
		margin: 0;
		background: #fff;
		min-height: 100%;
		font-family: Helvetica, Arial, sans-serif;
		font-size: 1.4em;
	}

  main {
		padding: 3rem 1rem;
  }

	h1 {
		font-family: "Helvetica", sans-serif;
		font-size: 48px;
		font-weight: bold;
	}

	h2 {
		font-family: "Helvetica", sans-serif;
		font-size: 24px;
		font-weight: bold;
	}

	h3 {
		font-family: "Helvetica", sans-serif;
		font-size: 19px;
		font-weight: bold;
	}

	p {
		font-family: "Helvetica", sans-serif;
		font-size: 19px;
		line-height: 27px;
	}

	a {
		font-family: "Helvetica", sans-serif;
		font-size: 19px;
		line-height: 26px;
		text-decoration: underline;
		color: #4A90E2;
	}


	#fed-id {
	padding-top: 40px;
	padding-bottom: 40px;
	padding-left: 60px;
	}

	#french {
		text-align: right;
		padding-top: 40px;
		padding-bottom: 40px;
		padding: 30px;
		display: inline;
		float: right;
	}
	#canwordmark {
		text-align: right;
		display: inline;
		float: right;
		padding-top: 15px;
		padding-right: 30px;

	}
	#info {
		top: 5px;
		left: 5px;
		display: inline;
	}

	input[type=text] {
		width: 30%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
		border: 3px solid #ccc;
		-webkit-transition: 0.5s;
		transition: 0.5s;
		outline: none;
	}

	input[type=text]:focus {
		border: 3px solid #555;
	}

  #index-page {
    background-color: yellow;
  }
`

const IndexPage = () => (
  <div>
    <header>
      <AlphaBanner />
      <section>
        <div id="federal-banner">
          <GoCSignature width="10em" flag="#000" />
          <Link href="https://www.canada.ca/fr.html">
            <a>Francais</a>
          </Link>
        </div>
      </section>
    </header>

    <main role="main">
      <header id="index-page">
        <div id="page-header">
          <p>Natural Resources Canada</p>
          <h1>EnerGuide API</h1>
        </div>

        <h2>What is the EnerGuide API?</h2>
        <p>
          The EnerGuide API allows you to access the housing data provided by
          Natural Resources Canada. You will have open access the data, and will
          be able to query to an individual dwelling.
        </p>
        <Link href="/search">
          <a>Test the API</a>
        </Link>
        <Link href="https://github.com/cds-snc/nrcan_api">
          <a>Access the API</a>
        </Link>
      </header>

      <div id="page-body">
        <section>
          <h2>What is an API?</h2>
          <p>
            An <strong>Application Programming Interface</strong>Application
            Programming Interface, or
            <abbr title="Application Programming Interface">API</abbr>, is a set
            of routines, protocols and tools for building software. Many
            applications can talk to each other and deliver a response.
          </p>
        </section>
        <section>
          <h2>What are the benefits of the EnerGuide API?</h2>
          <h3>View open data</h3>
          <p>
            The EnerGuide API will help make energy consumption data accessible
            for everyone.
          </p>
          <h3>Query specific data</h3>
          <p>
            You can choose to access the granular data that you need. You will
            benefit from the ability to extract data data that is specific to
            your needs.
          </p>
          <h3>Access current data</h3>
          <p>
            The EnerGuide API will help make energy consumption data accessible
            for everyone.
          </p>
        </section>
        <section>
          <h2>How can I use the EnerGuide API?</h2>
          <p>
            Developers and data analysts can allow users to query specific
            information from large data sets. They set the rules that will guide
            the user to what they need.{' '}
          </p>
          <h3>
            To see how it can be used,&nbsp;
            <Link href="/search">
              <a>test the API</a>
            </Link>
          </h3>
          <h3>
            Ready to use the Energuide API?&nbsp;
            <Link href="https://github.com/cds-snc/nrcan_api">
              <a>Read the documentation</a>
            </Link>
          </h3>
        </section>
      </div>
    </main>
    <Footer />
  </div>
)

export default IndexPage
