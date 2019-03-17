import React from 'react'

import Button from '../../atoms/button'
const Directions = () => {
  const distance = 5
  return (
    <div>
      <p>`You are currently {distance} kilometres away`</p>
      <Button>GET DIRECTIONS</Button>
    </div>
  )
}

export default Directions
