import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

import Link from '../../atoms/link'
import Button from '../../atoms/button'
const MobileNav = ({ menuOpen, setMenuOpen }) => (
  <StyledBox width="100%" height="100%" menuOpen={menuOpen}>
    <StyledFlex
      alignItems="center"
      flexDirection="column"
      justifyContent="space-around"
      mt="184px"
    >
      <StyledLink
        type="dark"
        href="#details"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        Details
      </StyledLink>
      <StyledLink
        type="dark"
        href="#location"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        Location
      </StyledLink>
      <StyledLink
        type="dark"
        href="#accommodations"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        Accommodations
      </StyledLink>
      <Button
        href="#RSVP"
        type="primary"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        RSVP
      </Button>
    </StyledFlex>
  </StyledBox>
)

const StyledBox = styled(Box)`
  position: fixed;
  top: 0;
  right: ${props => (props.menuOpen ? '0%' : '100%')};
  background: ${props => props.theme.palette.grayscale[0]};
  height: 100%;
  transition: 0.4s;
`

const StyledFlex = styled(Flex)`
  height: 234px;
`

const StyledLink = styled(Link)`
  margin-top: 10px;
  color: black;

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

export default MobileNav
