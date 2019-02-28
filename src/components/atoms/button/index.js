import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'
import { PropsTable } from 'docz'

function Button(props) {
  return <ButtonStyles {...props}>{props.children}</ButtonStyles>
}

const sizes = ({ size, theme, ...rest }) => {
  return `
    width: ${size === 'normal' ? '237px' : '495px'};
    height: ${size === 'normal' ? '51px' : '51px'};
    font-size: ${theme.fontsizes[1]};
  `
}

const typeStyles = ({ type, theme, ...rest }) => {
  const { borders, fonts, fontsizes, fontweights, palette, space } = theme
  return `
    background: ${type !== 'primary' ? palette.secondary[4] : 'none'};
    color: ${type !== 'primary' ? palette.grayscale[0] : palette.grayscale[3]};
    ${type === 'primary' && borders[0]};
    `
}

const ButtonStyles = styled('button')`
  ${props => sizes(props)};
  ${props => typeStyles(props)};
  text-transform: uppercase;
`

Button.propTypes = {
  size: t.oneOf(['small', 'normal']),
  type: t.oneOf(['primary', 'secondary']),
}

Button.defaultProps = {
  size: 'normal',
  type: 'primary',
}

export default Button
