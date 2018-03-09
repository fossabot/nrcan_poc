import { css } from 'react-emotion'

export const apiAccess = css`
  background-color: white;
  padding-left: 60px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 60px;
  margin-right: 700px;
  margin-bottom: 60px;
`

export const apiContent = css`
  padding-left: 60px;
  padding-right: 300px;
  padding-bottom: 25px;
`

export const apiContentForm = css`
  padding-left: 60px;
  padding-right: 300px;
  padding-bottom: 25px;
`

export const apiContentList = css`
  padding-bottom: 5px;
`

export const background = css`
  background-color: #f7f7f7;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const breadcrumb = css`
  ul& {
    padding: 10px 60px;
    list-style: none;
    background-color: #eee;
    margin-top: 0;
    margin-bottom: 0;
  }
  ul& li {
    display: inline;
    font-size: 18px;
  }
  ul& li + li:before {
    padding: 10px;
    color: black;
    content: '>';
  }
  ul& li a {
    color: #0275d8;
    text-decoration: underline;
  }
  ul& li a:hover {
    color: #01447e;
    text-decoration: none;
  }
`

export const button = css`
  background-color: #4a4a4a;
  border: none;
  color: white;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 0.2em;
`

export const checkmark = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`

export const container = css`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-family: 'Helvetica', sans-serif;
  cursor: pointer;
  font-size: 24px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  &:hover input ~ .${checkmark} {
    background-color: #ccc;
  }
  & input:checked ~ .${checkmark} {
    background-color: #2196f3;
  }
  & input:checked ~ .${checkmark}:after {
    display: block;
  }
  & .${checkmark}:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`

export const container2 = css`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-family: 'Helvetica', sans-serif;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  &:hover input ~ .${checkmark} {
    background-color: #ccc;
  }
  & input:checked ~ .${checkmark} {
    background-color: #2196f3;
  }
  & input:checked ~ .${checkmark}:after {
    display: block;
  }
  & .${checkmark}:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export const footer = css`
  background: #f1f1f1;
  color: black;
  padding-left: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const header = css`
  margin-right: 320px;
  margin-left: 60px;
`

export const headerBanner = css`
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #f7f7f7;
`

export const hintText = css`
  color: #4a4a4a;
`

export const homeNav = css`
  padding-bottom: 20px;
  padding-left: 60px;
`

export const radio = css`
  padding-bottom: 40px;
  padding-left: 60px;
`

export const submit = css`
  padding-left: 60px;
  padding-bottom: 60px;
`
