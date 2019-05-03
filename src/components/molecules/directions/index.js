import React from 'react'
import { Box } from '@rebass/grid'
import styled from 'styled-components'

import { TertiaryReg } from '../../atoms/fonts'
import Button from '../../atoms/button'
const Directions = ({ location, onClick }) => {
  let distance = null
  if (location) {
    distance = getDistance({ lon: location.long, lat: location.lat }).toFixed()
  }
  return (
    <DirectionBox>
      <DirectionText>
        {distance && <>You are currently {distance} kilometres away</>}
      </DirectionText>
      <Button
        href="https://maps.google.com/?saddr=My%20Location&daddr=Pugwash,+Nova+Scotia"
        target="_blank"
      >
        GET DIRECTIONS
      </Button>
    </DirectionBox>
  )
}

const DirectionBox = styled(Box)`
  text-align: center;
  margin: -80px auto 20px;
  position: relative;
  background: white;
  padding: 40px;
  height: 194px;

  ${props => props.theme.media.tablet`width: 770px;`}
`

const DirectionText = styled.p`
  ${TertiaryReg};
  font-size: ${props => props.theme.fontsizes[3]};
  letter-spacing: 2px;
  margin-bottom: 38px;
  color: ${props => props.theme.palette.secondary[4]};
  font-style: italic;
`

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
