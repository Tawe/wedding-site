import React from 'react'
import Media from 'react-media'

import Details from '../templates/details'
import Accomodations from '../templates/accomodations'
import Location from '../templates/location'
import RSVP from '../templates/rsvp'
import Hero from '../templates/hero'
import MiddleImage from '../templates/middleimage'
import MobileMenu from '../molecules/mobilemenu'

function Home({ menuOpen, setMenuOpen }) {
  return (
    <React.Fragment>
      <Hero {...{ menuOpen }} {...{ setMenuOpen }} />
      <Media query="(max-width: 650px)">
        {matches =>
          matches && (
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          )
        }
      </Media>
      <Details />
      <Location />
      <MiddleImage />
      <Accomodations />
      <RSVP />
    </React.Fragment>
  )
}

export default Home
