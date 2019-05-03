import React from 'react'
import styled from 'styled-components'
import { PrimaryReg } from '../fonts'
import t from 'prop-types'

function Button(props) {
  return (
    <>
      {props.href ? (
        <StyledLink {...props}>{props.children}</StyledLink>
      ) : (
        <ButtonLink {...props}>{props.children}</ButtonLink>
      )}
    </>
  )
}

const typeStyles = ({ type, theme, ...rest }) => {
  const { borders, fontweights, palette } = theme
  return `
    background: ${type !== 'secondary' ? 'none' : palette.secondary[4]};
    color: ${type !== 'primary' ? palette.grayscale[0] : palette.grayscale[3]};
    ${type === 'primary' && borders[0]};
    ${type === 'tertiary' && borders[1]};
    font-weight: ${fontweights.bold};
    `
}

const StyledLink = styled.a`
  ${props => typeStyles(props)};
  padding: 15px 55px;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: ${props => props.theme.fontsizes[1]}
  text-decoration: none;
  height: ${props => props.fullscreen && '100%'};
  width: ${props => props.fullscreen && '100%'};
  &:hover {
    cursor: pointer;
  }
`

const ButtonLink = styled.button`
  ${props => typeStyles(props)};
  padding: 15px 55px;
  ${PrimaryReg}
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: ${props => props.theme.fontsizes[1]}

  height: ${props => props.fullscreen && '100%'};
  width: ${props => props.fullscreen && '100%'};
  &:hover {
    cursor: pointer;
  }
`

Button.propTypes = {
  type: t.oneOf(['primary', 'secondary', 'tertiary']),
}

Button.defaultProps = {
  type: 'primary',
}

export default Button
