import React from 'react'
import styled from 'styled-components'

function Input(props) {
  return <InputStyles {...props} />
}

const InputStyles = styled.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  text-indent: 27px;
  color: ${props => props.theme.palette.grayscale[1]};
  ${props => props.theme.borders[0]};
`

export default Input
