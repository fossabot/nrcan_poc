import React from 'react'
import { css } from 'react-emotion'

const banner = css`
    background-color: black;
    color: white;
    padding-left: 60px;
    padding-top: 3px;
    padding-bottom: 3px;
`

const AlphaBanner = () => (
  <div className={banner}>
    <p>Alpha - This is an internal service</p>
  </div>
)

export default AlphaBanner
