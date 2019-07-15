import React from 'react'
import BackgroundImage from 'react-background-image'

import { Box } from '../../atoms/box'
import Visibility from '../../atoms/visibility'
import hdImage from './image2_large.jpg'
import smallImage from './image2_small.jpg'

const MiddleImages = () => (
  <Visibility>
    {isVisible => (
      <>
        {isVisible ? <VisibleContents /> : <Box width="100%" height="564px" />}
      </>
    )}
  </Visibility>
)

const VisibleContents = () => (
  <Box width="100%" height="564px">
    <BackgroundImage placeholder={smallImage} src={hdImage} />
  </Box>
)

export default MiddleImages
