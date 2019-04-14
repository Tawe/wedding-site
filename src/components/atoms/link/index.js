import React from 'react'
import styled from 'styled-components'

import { PrimaryLight } from '../../atoms/fonts'

const Link = ({ children, ...rest }) => (
  <LinkStyles {...rest}>{children}</LinkStyles>
)

const LinkStyles = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  ${PrimaryLight}
  font-size: ${props => props.theme.fontsizes[1]};
  color: ${props => props.theme.palette.grayscale[0]};
  letter-spacing: 0.12rem;
  text-decoration: none;
`

export default Link
