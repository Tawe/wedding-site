import React from 'react'
import styled from 'styled-components'

import { PrimaryBold } from '../../atoms/fonts'
function Label({ children, ...rest }) {
  return <LabelStyles {...rest}>{children}</LabelStyles>
}

const LabelStyles = styled.label`
  ${PrimaryBold};
  letter-spacing: 0.12rem;
  font-size: ${props => props.theme.fontsizes[1]};
`

export default Label
