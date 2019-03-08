import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'
import { PropsTable } from 'docz'

import Button from '../../atoms/button'

function AccommondationBlock({venue, location, phoneNum, distance}) {
  return (
    <React.Fragment>
      <div>{venue}</div>
      <div>{location}</div>
      <div>{phoneNum}</div>
      <div>{distance}</div>
      <Button type="primary">Book Online</Button>
    </React.Fragment>
  )
}


AccommondationBlock.propTypes = {
  venue: t.string,
  location: t.string,
  phoneNum: t.string,
  distance: t.string,
}

export default AccommondationBlock
