import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'

function Button(props) {
  return <ButtonStyles {...props}>{props.children}</ButtonStyles>
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

const ButtonStyles = styled('button')`
  ${props => typeStyles(props)};
  padding: 20px 50px;
  text-transform: uppercase;
  letter-spacing: 0.12rem;

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
