import React from 'react'
import { css } from 'react-emotion'
import { GoCSignature } from '@cdssnc/gcui'
import Link from 'next/link'

const fbanner = css`
  background-color: white;
  color: black;
  padding-left: 60px;
  padding-top: 10px;
  padding-bottom: 3px;
`
const frlink = css`
  text-align: right;
  background-color: white;
  color: black;
  padding-right: 60px;
`
const container = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const FederalBanner = () => (
  <div className={fbanner}>
    <section>
      <div className={container}>
        <div>
          <GoCSignature width="10em" flag="#000" />
        </div>

        <div>
          <Link href="https://www.canada.ca/fr.html">
            <a className={frlink}>Francais</a>
          </Link>
        </div>
      </div>
    </section>
  </div>
)

export default FederalBanner
