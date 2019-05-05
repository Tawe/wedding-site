import React from 'react'
import styled from 'styled-components'

function Label({ children, ...rest }) {
  return <LabelStyles {...rest}>{children}</LabelStyles>
}

const LabelStyles = styled.label`
  letter-spacing: 0.12rem;
  font-size: ${props => props.theme.fontsizes[1]};
  font-weight: ${props => props.theme.fontweights.bold};
`

export default Label
