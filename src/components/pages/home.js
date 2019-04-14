import React from 'react'

import Details from '../templates/details'
import Accomodations from '../templates/accomodations'
import Location from '../templates/location'
import RSVP from '../templates/rsvp'
import Hero from '../templates/hero'
import MiddleImage from '../templates/middleimage'

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Details />
      <Location />
      <MiddleImage />
      <Accomodations />
      <RSVP />
    </React.Fragment>
  )
}

export default Home
