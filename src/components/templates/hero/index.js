import React from 'react'
import styled from 'styled-components'
import Media from 'react-media'
import { Box } from '@rebass/grid'

import Nav from '../../molecules/nav'
import MobileNav from '../../molecules/mobilenav'
import { TertiaryReg } from '../../atoms/fonts'

import Button from '../../atoms/button'
const Hero = ({ menuOpen, setMenuOpen }) => (
  <HeroContainer>
    <Overlay />
    <NavContainer>
      <Media query="(max-width: 650px)">
        {matches =>
          matches ? (
            <MobileNav setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
          ) : (
            <Nav />
          )
        }
      </Media>
    </NavContainer>
    <Title {...{ menuOpen }} {...{ setMenuOpen }} />
  </HeroContainer>
)

const Title = ({ menuOpen, setMenuOpen }) => (
  <TitleWrapper>
    <Hashtag>#2becomemunn</Hashtag>
    <Line />
    <Names>
      KAILEY <AMP>&</AMP> JOHN
    </Names>
    <Media query="(max-width: 650px)">
      {matches =>
        matches && (
          <Box mt="60px" width="155px" mx="auto">
            <Button href="#RSVP" type="tertiary">
              RSVP
            </Button>
          </Box>
        )
      }
    </Media>
  </TitleWrapper>
)

const Overlay = styled.div`
  position: absolute;
  background: rgb(84, 84, 84);
  background: linear-gradient(
    359deg,
    rgba(84, 84, 84, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  height: 100%;
`

const AMP = styled.span`
  font-weight: 200;
`

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url('./assets/imgs/hero_large.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const NavContainer = styled.div`
  position: absolute;
  top: 78px;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  z-index: 222;
  ${props => props.theme.media.navBreak`position:relative`}
`

const TitleWrapper = styled.div`
  position: relative;
  text-align: center;
  padding-top: 230px;
`

const Hashtag = styled.div`
  ${TertiaryReg};
  font-size: ${props => props.theme.fontsizes[3]};
  font-style: italic;
  letter-spacing: 2px;
  color: ${props => props.theme.palette.grayscale[0]};
`

const Line = styled.div`
  width: 30px;
  height: 1px;
  margin: 20px auto;
  background: white;
`

const Names = styled.div`
  font-size: ${props => props.theme.fontsizes[5]};
  font-weight: ${props => props.theme.fontweights.bold};
  letter-spacing: 0.32rem;
  color: ${props => props.theme.palette.grayscale[0]};
`

export default Hero
