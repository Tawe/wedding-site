import React from 'react'
import styled, { css } from 'styled-components'
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

const typeStyles = ({ type, theme, ...rest }, hover) => {
  const { borders, fontweights, palette, fonts } = theme
  if (hover) {
    if (type !== 'secondary' && type !== 'tertiary') {
      type = 'secondary'
    } else {
      type = 'primary'
    }
  }
  return `
    background: ${
      type !== 'tertiary' && type !== 'secondary'
        ? palette.grayscale[0]
        : type !== 'secondary'
        ? 'none'
        : palette.secondary[4]
    };
    color: ${type !== 'primary' ? palette.grayscale[0] : palette.grayscale[3]};
    border: ${
      type !== 'tertiary' ? borders[0] : type === 'tertiary' && borders[1]
    };
    font-family: ${fonts.primary};
    font-weight: ${fontweights.bold};
    `
}

const Styles = css`
  ${props => typeStyles(props, false)};
  padding: 15px 55px;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  text-decoration: none;
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontsizes[1]};
  height: 100%;
  width: 100%;
  cursor: pointer;

  &:hover {
    ${props => typeStyles(props, true)};
  }
`

const StyledLink = styled.a`
  ${Styles};
`

const ButtonLink = styled.button`
  ${Styles};
`

Button.propTypes = {
  type: t.oneOf(['primary', 'secondary', 'tertiary']),
}

Button.defaultProps = {
  type: 'primary',
}

export default Button
