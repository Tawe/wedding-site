import React from 'react'
import styled from 'styled-components'

import Map from '../../molecules/map'
import Directions from '../../molecules/directions'

const Location = () => (
  <section>
    <h3>Thinker’s Lodge</h3>
    <p>PUGWASH, NOVA SCOTIA</p>
    <Map />
    <Directions />
  </section>
)

export default Location
