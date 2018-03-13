import React from 'react'
import { css } from 'react-emotion'

const banner = css`
  background-color: #4A4A4A;
  color: white;
  padding-left: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const AlphaBanner = () => (
  <div className={banner}>
    <p>Alpha - This is an internal service</p>
  </div>
)

export default AlphaBanner
