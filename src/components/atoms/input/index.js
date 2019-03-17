import React from 'react'
import styled from 'styled-components'

function Input(props) {
  return <InputStyles {...props} />
}

const InputStyles = styled('input')`
  text-transform: uppercase;
  width: 495px;
  height: 45px;
  font-size: 12px;
  text-indent: 27px;
  color: ${props => props.theme.palette.grayscale[1]};
  ${props => props.theme.borders[0]};

  &::-webkit-input-placeholder {
    color: ${props => props.theme.palette.grayscale[1]};
  }
`

export default Input
