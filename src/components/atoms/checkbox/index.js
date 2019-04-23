import React from 'react'
import styled from 'styled-components'
import Input from '../input/index'

function CheckBox(props) {
  return <CheckBoxStyles type="radio" {...props} />
}

const CheckBoxStyles = styled(Input)`
  ${props => console.log(props)}
  height: 14px;
  width: 14px;
  margin-right: 15px;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  &:checked {
    background-color: black;
  }
`

export default CheckBox
