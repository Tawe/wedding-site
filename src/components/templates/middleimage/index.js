import React, { useState } from 'react'
import BackgroundImage from 'react-background-image'
import VisibilitySensor from 'react-visibility-sensor'

import { Box } from '../../atoms/box'
import hdImage from './image2_large.jpg'
import smallImage from './image2_small.jpg'

const MiddleImages = () => {
  const [state, setState] = useState({
    visible: false,
  })
  const changeVisiblity = isVisible => setState({ visible: isVisible })

  return (
    <VisibilitySensor
      onChange={changeVisiblity}
      partialVisibility
      active={!state.visible}
    >
      {({ isVisible }) => (
        <>
          {isVisible ? (
            <Box width="100%" height="564px">
              <BackgroundImage placeholder={smallImage} src={hdImage} />
            </Box>
          ) : (
            <Box width="100%" height="564px" />
          )}
        </>
      )}
    </VisibilitySensor>
  )
}

export default MiddleImages
