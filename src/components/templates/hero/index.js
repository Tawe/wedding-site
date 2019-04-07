import React from 'react'
import styled from 'styled-components'

import Nav from '../../molecules/nav'

const Hero = () => (
  <HeroContainer>
    <Overlay />
    <NavContainer>
      <Nav />
    </NavContainer>
    <div>
      <div>#2becomemunn</div>
      <Line />
      <div>KAILEY + JOHN</div>
    </div>
  </HeroContainer>
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
  top: 5%;
  width: 530px;
  margin: auto;
`

const Line = styled.div`
  width: 50px;
  height: 1px;
  margin: 20px auto;
  background: white;
`

export default Hero
