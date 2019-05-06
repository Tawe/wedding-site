import React from 'react'

import theme from '../../../theme'
import { Box } from '../../atoms/box'

const SectionTitle = ({ title, byline }) => (
  <Box pt={92} mb={42} textAlign="center">
    <Box
      fontFamily={theme.fonts.secondary}
      fontSize={theme.fontsizes[4]}
      letterSpacing="0.015rem"
      mb="5px"
    >
      {title}
    </Box>
    <Box
      fontSize={theme.fontsizes[1]}
      maxWidth="560px"
      lineHeight="1.5rem"
      letterSpacing="1px"
      m="auto"
      color={theme.palette.grayscale[3]}
    >
      {byline}
    </Box>
  </Box>
)
export default SectionTitle
