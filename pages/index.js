import React from 'react'
import { hydrate, injectGlobal } from 'react-emotion'
import AlphaBanner from '../components/AlphaBanner'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
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
`

const IndexPage = () => (
  <div>
    <header>
      <AlphaBanner />
    </header>
    <main>
      <p>Fully-automated luxury deployments!</p>
    </main>
  </div>
)

export default IndexPage
