import React from 'react'
import BackgroundImage from 'react-background-image'

import { Box } from '../../atoms/box'
import hdImage from './image2_large.jpg'
import smallImage from './image2_small.jpg'

const MiddleImages = () => (
  <Box width="100%" height="564px">
    <BackgroundImage placeholder={smallImage} src={hdImage} />
  </Box>
)

export default MiddleImages
