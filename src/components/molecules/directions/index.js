import React from 'react'

import Button from '../../atoms/button'
const Directions = ({ location, onClick }) => {
  let distance = null
  if (location) {
    distance = getDistance({ lon: location.long, lat: location.lat }).toFixed()
  }
  return (
    <div>
      {distance && <p>`You are currently {distance} kilometres away`</p>}
      <Button onClick={onClick}>GET DIRECTIONS</Button>
    </div>
  )
}

const getDistance = ({ lon, lat }) => {
  var p = 0.017453292519943295
  var c = Math.cos
  var a =
    0.5 -
    c((lat - 45.8536402) * p) / 2 +
    (c(45.8536402 * p) * c(lat * p) * (1 - c((lon - -63.6661275) * p))) / 2

  return 12742 * Math.asin(Math.sqrt(a))
}

export default Directions
