import React from 'react'

import theme from '../../../theme'
import { Box, P } from '../../atoms/box'
import Button from '../../atoms/button'

const Directions = ({ location, onClick }) => {
  let distance = null
  if (location) {
    distance = getDistance({ lon: location.long, lat: location.lat }).toFixed()
  }
  return (
    <Box
      textAlign="center"
      m="-80px auto 20px"
      position="relative"
      background="white"
      p="40px"
      height="194px"
      maxWidth="800px"
    >
      <P
        fontFamily={theme.fonts.tertiary}
        fontSize={theme.fontsizes[3]}
        letterSpacing="2px"
        mb="38px"
        color={theme.palette.secondary[4]}
      >
        {distance && <>You are currently {distance} kilometres away</>}
      </P>
      <Button
        href="https://maps.google.com/?saddr=My%20Location&daddr=249 Water St, Pugwash, NS B0K 1L0"
        target="_blank"
        rel="noreferrer"
      >
        GET DIRECTIONS
      </Button>
    </Box>
  )
}

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
