import React from 'react'
import styled from 'styled-components'

const Link = ({ children, ...rest }) => (
  <LinkStyles {...rest}>{children}</LinkStyles>
)

const LinkStyles = styled('a')`
  cursor: pointer;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontsizes[1]};
  color: ${props => props.theme.palette.grayscale[0]};
  letter-spacing: 0.12rem;
  font-weight: ${props => props.theme.fontweights.light};
`

export default Link
