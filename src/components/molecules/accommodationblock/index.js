import React from 'react'
import t from 'prop-types'

import theme from '../../../theme'
import Button from '../../atoms/button'
import { Box } from '../../atoms/box'

function AccommondationBlock({
  venue,
  location,
  phone_number,
  distance,
  address,
  link,
}) {
  return (
    <Box textAlign="center">
      <Box
        lineHeight="1.42rem"
        letterSpacing="1px"
        textTransform="uppercase"
        mb={20}
        fontWeight={theme.fontweights.bold}
      >
        {venue}
      </Box>
      <Box lineHeight="1.42rem">{address}</Box>
      <Box mb={20} lineHeight="1.42rem">{location}</Box>
      <Box mb={20}>{phone_number}</Box>
      <Box mb={40}>
        <CarIcon />
        {distance}
      </Box>
      <Button href={link} type="primary" target="_blank">
        Book Online
      </Button>
    </Box>
  )
}

const CarIcon = () => (
  <Box width="20px" mr="11px" verticalAlign="middle" display="inline">
    <svg width="20" height="16" viewBox="0 0 20 16">
      <path
        d="M18.278,70.18l-.468-1.171-.83-2.076A4.644,4.644,0,0,0,12.646,64H7.354a4.644,4.644,0,0,0-4.333,2.933l-.83,2.076L1.723,70.18A2.661,2.661,0,0,0,0,72.667v2a2.645,2.645,0,0,0,.667,1.747v2.253A1.333,1.333,0,0,0,2,80H3.333a1.333,1.333,0,0,0,1.333-1.333V77.333H15.333v1.333A1.333,1.333,0,0,0,16.667,80H18a1.333,1.333,0,0,0,1.333-1.333V76.414A2.643,2.643,0,0,0,20,74.667v-2A2.661,2.661,0,0,0,18.278,70.18ZM5.5,67.924a2,2,0,0,1,1.857-1.257h5.292A2,2,0,0,1,14.5,67.924L15.333,70H4.667ZM3.333,74.658a1.329,1.329,0,1,1,0-2.658,2.565,2.565,0,0,1,2,1.994C5.333,74.791,4.133,74.658,3.333,74.658Zm13.333,0c-.8,0-2,.133-2-.665a2.565,2.565,0,0,1,2-1.994,1.329,1.329,0,1,1,0,2.658Z"
        transform="translate(0 -64)"
      />
    </svg>
  </Box>
)

AccommondationBlock.propTypes = {
  venue: t.string,
  location: t.string,
  phoneNum: t.string,
  distance: t.string,
}

export default AccommondationBlock
