import React from 'react'
import { Flex } from '@rebass/grid'
import styled from 'styled-components'


import Link from '../../atoms/link'
import Button from '../../atoms/button'

const Nav = () => (
  <Flex alignItems='center' justifyContent="space-around">
    <StyledLink>Details</StyledLink>
    <StyledLink>Location</StyledLink>
    <StyledLink>Accommodations</StyledLink>
    <Button type='tertiary'>RSVP</Button>
  </Flex>
)

const StyledLink = styled(Link)`
margin-top: 10px;
&:after{
  content: '';
  display: block;
  height: 1px;
  background: white;
  width:0px;
  margin-top: 10px;
  transition: .25s all ease-in-out;
}

&:hover{
  &:after{
    width: 100%;
  }
}
`

export default Nav
