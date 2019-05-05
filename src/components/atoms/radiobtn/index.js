import React from 'react'
import styled from 'styled-components'
import Input from '../input/index'

function Radio(props) {
  return <RadioStyles type="radio" {...props} />
}

const RadioStyles = styled(Input)`
  height: 14px;
  width: 14px;
  margin-right: 15px;
  vertical-align: middle;
  transition: all 250ms;

  &:checked {
    background-color: black;
  }
`

export default Radio
