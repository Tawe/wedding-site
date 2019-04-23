import React from 'react'
import styled from 'styled-components'

function Input(props) {
  return <InputStyles {...props} />
}

const InputStyles = styled.input`
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  font-size: 12px;
  text-indent: 27px;
  color: ${props => props.theme.palette.grayscale[1]};
  ${props => props.theme.borders[0]};

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${props => props.theme.palette.grayscale[4]};
  }

  &:placeholder {
    color: ${props => props.theme.palette.grayscale[4]};
  }

  &:-webkit-input-placeholder {
    color: ${props => props.theme.palette.grayscale[4]};
  }
`

export default Input
