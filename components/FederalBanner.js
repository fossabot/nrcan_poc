import React from 'react'
import { css } from 'react-emotion'
import styled from 'react-emotion'
import { GoCSignature } from '@cdssnc/gcui'
import Link from 'next/link'

const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
}

const mediaQuery = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : 'max-width:'
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `
  return accumulator
}, {})

const container = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${mediaQuery.small(css`
    display: block;
  `)};
`

const fbanner = css`
  padding-left: 60px;
  padding-top: 10px;
  padding-bottom: 3px;
`
const frlink = css`
  text-align: right;
  color: black;
  padding-right: 60px;
`

const FederalBanner = () => (
  <section className={fbanner}>
    <div className={container}>
      <div>
        <GoCSignature width="10em" flag="#000" />
      </div>
      <Link href="https://www.canada.ca/fr.html">
        <a className={frlink}>Francais</a>
      </Link>
    </div>
  </section>
)

export default FederalBanner
