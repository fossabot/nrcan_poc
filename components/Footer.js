import React from 'react'
import { css } from 'react-emotion'
import { WordMark } from '@cdssnc/gcui'
import Link from 'next/link'

const footer = css`
  background: #000000;
  color: black;
  padding-left: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
`
const wordmark = css`
  padding-right: 60px;
`
const privacy = css`
  padding-top: 10px;
  color: white;
`

const Footer = () => (
  <footer className={footer}>

    <Link href="https://www.canada.ca/en/transparency/privacy.html">
      <a className={privacy}> Privacy</a>
    </Link>
    <div className={wordmark}>
      <WordMark width="6em" flag="#FFF" text="#FFF" />
    </div>

  </footer>
)

export default Footer
