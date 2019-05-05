import React from 'react'
import styled from 'styled-components'

const Link = ({ children, ...rest }) => (
  <LinkStyles {...rest}>{children}</LinkStyles>
)

const LinkStyles = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontsizes[1]};
  font-weight: ${props => props.theme.fontweights.bold};
  color: ${props =>
    props.type
      ? props.theme.palette.grayscale[1]
      : props.theme.palette.grayscale[0]};
  letter-spacing: 0.12rem;
  text-decoration: none;
`

export default Link
