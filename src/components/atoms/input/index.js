import React from 'react'
import { Input } from '../box'

import theme from '../../../theme'

const InputComponent = props => (
  <Input
    {...props}
    width="100%"
    height="100%"
    fontSize={theme.fontsizes[3]}
    textIndent="27px"
    color={theme.palette.grayscale[1]}
    border={theme.borders[0]}
    fontFamily={theme.fonts.primary}
  />
)

export { InputComponent as Input }
