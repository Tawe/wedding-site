import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const Visibility = ({ children }) => {
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
      {({ isVisible }) => children(isVisible)}
    </VisibilitySensor>
  )
}

export default Visibility
