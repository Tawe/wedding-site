import React from 'react'
import styled from 'styled-components'

const Link = ({ children, ...rest }) => (
  <LinkStyles {...rest}>{children}</LinkStyles>
)

const LinkStyles = styled('a')`
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontsizes[1]};
  color: ${props => props.theme.palette.grayscale[0]};

  &:hover {
    font-weight: ${props => props.theme.fontweights.bold};
  }
`

export default Link
