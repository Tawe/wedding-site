import React from 'react'
import styled from 'styled-components'

import Nav from '../../molecules/nav'
import { TertiaryReg, PrimaryBold } from '../../atoms/fonts'

const Hero = () => (
  <HeroContainer>
    <Overlay />
    <NavContainer>
      <Nav />
    </NavContainer>
    <Title />
  </HeroContainer>
)

const Title = () => (
  <TitleWrapper>
    <Hashtag>#2becomemunn</Hashtag>
    <Line />
    <Names>KAILEY & JOHN</Names>
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

const HeroContainer = styled.div`
  width: 100%;
  height: 820px;
  background: url('./assets/imgs/hero_large.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const NavContainer = styled.div`
  position: relative;
  top: 78px;
  width: 650px;
  margin: 0 auto 230px;
`

const TitleWrapper = styled.div`
  position: relative;
  text-align: center;
`

const Hashtag = styled.div`
  ${TertiaryReg};
  font-size: ${props => props.theme.fontsizes[3]};
  font-style: italic;
  letter-spacing: 0.12rem;
  color: ${props => props.theme.palette.grayscale[0]};
`

const Line = styled.div`
  width: 30px;
  height: 1px;
  margin: 20px auto;
  background: white;
`

const Names = styled.div`
  ${PrimaryBold};
  font-size: ${props => props.theme.fontsizes[5]};
  letter-spacing: 0.32rem;
  color: ${props => props.theme.palette.grayscale[0]};
`

export default Hero
