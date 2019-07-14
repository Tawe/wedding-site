import React from 'react'

import Map from '../../molecules/map'
import Directions from '../../molecules/directions'
import SectionTitle from '../../molecules/sectiontitle'

const Location = () => (
  <section id="location">
    <SectionTitle
      title="Thinkers Lodge"
      byline=" 249 WATER STREET, PUGWASH, NOVA SCOTIA"
    />
    <Map />
    <Directions />
  </section>
)

export default Location
