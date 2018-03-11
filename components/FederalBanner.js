import React from 'react'
import { css } from 'react-emotion'
import { GoCSignature } from '@cdssnc/gcui'
import Link from 'next/link'

const fbanner = css`
  background-color: white;
  color: black;
  padding-left: 60px;
  padding-top: 3px;
  padding-bottom: 3px;
`
const FederalBanner = () => (
  <div className={fbanner}>
    <section>
      <div id="federal-banner">
        <GoCSignature width="10em" flag="#000" />
        <Link href="https://www.canada.ca/fr.html">
          <a>Francais</a>
        </Link>
      </div>
    </section>
  </div>
)

export default FederalBanner
