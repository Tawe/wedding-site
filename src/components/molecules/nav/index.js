import React from 'react'
import { Flex } from '@rebass/grid'

import Link from '../../atoms/link'

const Nav = () => (
  <Flex justifyContent="space-evenly">
    <Link>Details</Link>
    <Link>Location</Link>
    <Link>Accommodations</Link>
    <Link>RSVP</Link>
  </Flex>
)

export default Nav
