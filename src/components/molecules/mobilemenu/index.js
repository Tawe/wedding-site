import React from 'react'
import { Flex, Box } from '../../atoms/box'
import styled from 'styled-components'

import Link from '../../atoms/link'
import Button from '../../atoms/button'
import theme from '../../../theme'

const Links = [
  {
    href: '#details',
    copy: 'Details',
  },
  {
    href: '#location',
    copy: 'Location',
  },
  {
    href: '#accommodations',
    copy: 'Accommodations',
  },
]

const MobileNav = ({ menuOpen, setMenuOpen }) => (
  <Box
    width="100%"
    height="100%"
    position="fixed"
    top="0"
    transition="0.4s"
    menuOpen={menuOpen}
    background={theme.palette.grayscale[0]}
    right={menuOpen ? '0%' : '100%'}
  >
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="space-around"
      mt="184px"
      height="234px"
    >
      {Links.map(link => (
        <StyledLink
          key={link.href}
          type="dark"
          target="_self"
          href={link.href}
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}
        >
          {link.copy}
        </StyledLink>
      ))}
      <Box>
        <Button
          href="#RSVP"
          type="primary"
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}
        >
          RSVP
        </Button>
      </Box>
    </Flex>
  </Box>
)

const StyledLink = styled(Link)`
  margin-top: 10px;
  color: black;
  display: block;
  opacity: 1;
`

export default MobileNav
