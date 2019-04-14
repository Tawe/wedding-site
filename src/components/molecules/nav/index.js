import React from 'react'
import { Flex } from '@rebass/grid'
import styled from 'styled-components'

import Link from '../../atoms/link'
import Button from '../../atoms/button'

const Nav = () => (
  <Flex alignItems="center" justifyContent="space-around">
    <StyledLink href="#details">Details</StyledLink>
    <StyledLink href="#location">Location</StyledLink>
    <StyledLink href="#accommodations">Accommodations</StyledLink>
    <Button type="tertiary">RSVP</Button>
  </Flex>
)

const StyledLink = styled(Link)`
  margin-top: 10px;

  &::after {
    content: '';
    display: block;
    height: 1px;
    background: white;
    width: 0;
    margin-top: 10px;
    transition: 0.25s all ease-in-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`

export default Nav
