import React, { useState } from 'react'
import styled from 'styled-components'

import Map from '../../molecules/map'
import Directions from '../../molecules/directions'

const Location = () => {
  const [state, setState] = useState(0)
  navigator.geolocation.getCurrentPosition(function(location) {
    const { latitude, longitude } = location.coords
    setState({ location: { lat: latitude, long: longitude } })
  })
  console.log(state)
  return (
    <section>
      <h3>Thinker’s Lodge</h3>
      <p>PUGWASH, NOVA SCOTIA</p>
      <Map info={state} />
      <Directions
        onClick={() => {
          setState({ location: state.location, getDirections: true })
        }}
        location={state.location}
      />
    </section>
  )
}

export default Location
