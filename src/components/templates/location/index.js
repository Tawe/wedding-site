import React, { useState } from 'react'

import Map from '../../molecules/map'
import Directions from '../../molecules/directions'
import SectionTitle from '../../molecules/sectiontitle'

const Location = () => {
  const [state, setState] = useState(0)
  navigator.geolocation.getCurrentPosition(function(location) {
    const { latitude, longitude } = location.coords
    setState({ location: { lat: latitude, long: longitude } })
  })
  return (
    <section id="location">
      <SectionTitle
        title="Thinkers Lodge"
        byline=" 249 WATER STREET, PUGWASH, NOVA SCOTIA"
      />
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
