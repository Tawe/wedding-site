import React from 'react'

import theme from '../../../theme'
import { Flex, Box } from '../../atoms//box'

const DetailsBlock = ({ title, bold, info }) => (
  <Flex flexDirection="column" alignItems="center" m={53}>
    <Box
      fontSize={theme.fontsizes[4]}
      fontFamily={theme.fonts.secondary}
      mb={16}
    >
      {title}
    </Box>
    <Box
      letterSpacing="1px"
      fontSize={theme.fontsizes[1]}
      fontWeight={theme.fontweights.bold}
      textTransform="uppercase"
      mb="5px"
    >
      {bold}
    </Box>
    <Box fontSize={theme.fontsizes[3]}>{info}</Box>
  </Flex>
)

export default DetailsBlock
