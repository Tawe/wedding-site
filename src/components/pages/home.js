import React from 'react'

import Details from '../templates/details'
import Accomodations from '../templates/accomodations'
import Location from '../templates/location'
import RSVP from '../templates/rsvp'

function Home() {
  return (
    <React.Fragment>
      <Details />
      <Location />
      <Accomodations />
      <RSVP />
    </React.Fragment>
  )
}

export default Home
