import React from 'react'
import Media from 'react-media'

import BackgroundImage from 'react-background-image'
import theme from '../../../theme'
import Nav from '../../molecules/nav'
import MobileNav from '../../molecules/mobilenav'
import { Box } from '../../atoms/box'
import Button from '../../atoms/button'
import hdImage from './hero_large.jpg'
import smallImage from './hero_small.jpg'
import Visibility from '../../atoms/visibility'

const Hero = ({ menuOpen, setMenuOpen }) => (
  <Visibility>
    {isVisible => (
      <>
        {isVisible ? (
          <VisibleContents {...{ menuOpen }} {...{ setMenuOpen }} />
        ) : (
          <Box width="100%" height="100vh" min-height="700px" />
        )}
      </>
    )}
  </Visibility>
)

const VisibleContents = ({ menuOpen, setMenuOpen }) => (
  <Box width="100%" height="100vh" min-height="700px ">
    <BackgroundImage placeholder={smallImage} src={hdImage}>
      <Box
        position="absolute"
        background="linear-gradient(359deg, rgba(84, 84, 84, 0) 0%, rgba(0, 0, 0, 1) 100%)"
        width="100%"
        height="100%"
        zIndex="2"
      />
      <Media query="(max-width: 650px)">
        {matches =>
          matches ? (
            <Box
              top="60px"
              zIndex="222"
              position="absolute"
              width="100%"
              m="0 auto"
            >
              <MobileNav setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            </Box>
          ) : (
            <Box
              position="relative"
              top="78px"
              zIndex="222"
              width="100%"
              maxWidth="650px"
              m="0 auto"
            >
              <Nav />
            </Box>
          )
        }
      </Media>
      <HeroTitle {...{ menuOpen }} {...{ setMenuOpen }} />
    </BackgroundImage>
  </Box>
)

const HeroTitle = ({ menuOpen, setMenuOpen }) => (
  <Box
    pt={['165px', '175px', '275px']}
    textAlign="center"
    position="relative"
    zIndex="2"
  >
    <Box
      fontFamily={theme.fonts.tertiary}
      fontSize={theme.fontsizes[3]}
      letterSpacing="2px"
      color={theme.palette.grayscale[0]}
    >
      #2becomemunn
    </Box>
    <Box width="30px" background="white" height="1px" m="20px auto" />
    <Box
      fontSize={theme.fontsizes[5]}
      fontWeight={theme.fontweights.bold}
      letterSpacing="0.32rem"
      width={['160px', '100%']}
      m="auto"
      color={theme.palette.grayscale[0]}
    >
      KAILEY{' '}
      <Box display="inline" fontWeight={theme.fontweights.light}>
        &
      </Box>{' '}
      JOHN
    </Box>
    <Media query="(max-width: 650px)">
      {matches =>
        matches && (
          <Box mt="60px" width="155px" mx="auto" zIndex="2">
            <Button href="#RSVP" type="tertiary">
              RSVP
            </Button>
          </Box>
        )
      }
    </Media>
  </Box>
)

export default Hero
