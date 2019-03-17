import React from 'react'

import Details from '../templates/details'
import Accomodations from '../templates/accomodations'
import Location from '../templates/location'

function Home() {
  return (
    <React.Fragment>
      <Details />
      <Location />
      <Accomodations />
    </React.Fragment>
  )
}

export default Home
