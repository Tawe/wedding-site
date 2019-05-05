import React from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import t from 'prop-types'

import Button from '../../atoms/button'

function AccommondationBlock({
  venue,
  location,
  phone_number,
  distance,
  address,
  link,
}) {
  return (
    <AccommondationBox>
      <AccommondationItems bold mb={20}>
        {venue}
      </AccommondationItems>
      <AccommondationAddress>{address}</AccommondationAddress>
      <Box mb={20}>{location}</Box>
      <Box mb={20}>{phone_number}</Box>
      <Box mb={40}>
        <CarIcon />
        {distance}
      </Box>
      <Button href={link} type="primary" target="_blank">
        Book Online
      </Button>
    </AccommondationBox>
  )
}

const CarIcon = () => (
  <CarBox width="20px" mr="4px">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      viewBox="0 0 20 16"
    >
      <path
        id="car-alt"
        d="M18.278,70.18l-.468-1.171-.83-2.076A4.644,4.644,0,0,0,12.646,64H7.354a4.644,4.644,0,0,0-4.333,2.933l-.83,2.076L1.723,70.18A2.661,2.661,0,0,0,0,72.667v2a2.645,2.645,0,0,0,.667,1.747v2.253A1.333,1.333,0,0,0,2,80H3.333a1.333,1.333,0,0,0,1.333-1.333V77.333H15.333v1.333A1.333,1.333,0,0,0,16.667,80H18a1.333,1.333,0,0,0,1.333-1.333V76.414A2.643,2.643,0,0,0,20,74.667v-2A2.661,2.661,0,0,0,18.278,70.18ZM5.5,67.924a2,2,0,0,1,1.857-1.257h5.292A2,2,0,0,1,14.5,67.924L15.333,70H4.667ZM3.333,74.658a1.329,1.329,0,1,1,0-2.658,2.565,2.565,0,0,1,2,1.994C5.333,74.791,4.133,74.658,3.333,74.658Zm13.333,0c-.8,0-2,.133-2-.665a2.565,2.565,0,0,1,2-1.994,1.329,1.329,0,1,1,0,2.658Z"
        transform="translate(0 -64)"
      />
    </svg>
  </CarBox>
)

const AccommondationItems = styled(Box)`
  line-height: 1.42rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${props => props.bold && props.theme.fontweights.bold};
`

const AccommondationAddress = styled(Box)`
  line-height: 1.42rem;
  ${props => props.bold && props.theme.fontweights.bold};
`

const AccommondationBox = styled(Box)`
  margin: auto;
  text-align: center;
`

const CarBox = styled(Box)`
  display: inline;
`

AccommondationBlock.propTypes = {
  venue: t.string,
  location: t.string,
  phoneNum: t.string,
  distance: t.string,
}

export default AccommondationBlock
