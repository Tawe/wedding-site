import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

import { SecondaryBold, PrimaryReg } from '../../atoms/fonts'
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
      <SectionTitle title="Thinker’s Lodge" byline="PUGWASH, NOVA SCOTIA" />
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

const LocationWrapper = styled(Box)`
  text-align: center;
`

const LocationTitle = styled(Box)`
  ${SecondaryBold};
  font-size: ${props => props.theme.fontsizes[4]};
  letter-spacing: 0.015rem;
`

const Loc = styled.div`
  ${PrimaryReg};
  font-size: ${props => props.theme.fontsizes[1]};
`

export default Location
