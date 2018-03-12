import React from 'react'
import { css } from 'react-emotion'
import { WordMark } from '@cdssnc/gcui'
import Link from 'next/link'

const footer = css`
  background: #f1f1f1;
  color: black;
  padding-left: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Footer = () => (
  <footer className={footer}>
    <Link href="https://www.canada.ca/en/transparency/privacy.html">
      <a>Privacy</a>
    </Link>
    <WordMark width="6em" flag="#000" />
  </footer>
)

export default Footer
