import React from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import t from 'prop-types'

import { PrimaryReg } from '../../atoms/fonts'
import Button from '../../atoms/button'
import theme from '../../../theme'

function AccommondationBlock({
  line,
  venue,
  location,
  phone_number,
  distance,
  address,
}) {
  return (
    <AccommondationBox {...{ line }}>
      <Box mb={20}>{venue}</Box>
      <AccommondationItems>{address}</AccommondationItems>
      <Box mb={20}>{location}</Box>
      <Box mb={20}>{phone_number}</Box>
      <Box mb={20}>{distance}</Box>
      <Button type="primary">Book Online</Button>
    </AccommondationBox>
  )
}

const AccommondationItems = styled(Box)`
  line-height: 1.42rem;
`

const AccommondationBox = styled(Box)`
  ${props =>
    props.line &&
    `&:before {
    content: '';
    height: 100%;
    border-right: solid 1px grey;
  }`};
  ${PrimaryReg};
  text-align: center;
`

AccommondationBlock.propTypes = {
  venue: t.string,
  location: t.string,
  phoneNum: t.string,
  distance: t.string,
}

export default AccommondationBlock
