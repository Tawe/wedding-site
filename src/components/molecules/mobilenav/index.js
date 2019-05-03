import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

const MobileNav = ({ menuOpen, setMenuOpen }) => (
  <StyledFlex
    ml={`calc(100% - 80px)`}
    justifyContent="space-around"
    flexDirection="column"
    width="38px"
    onClick={() => {
      setMenuOpen(!menuOpen)
    }}
  >
    <Line position="top" menuOpen={menuOpen} />
    <Line my="10px" menuOpen={menuOpen} />
    <Line position="bottom" menuOpen={menuOpen} />
  </StyledFlex>
)

const StyledFlex = styled(Flex)`
  cursor: pointer;
`

const Line = styled(Box)`
  width: 100%;
  height: 1px;
  background: white;
  transition: 0.4s;
  ${props => lineAnimation(props)}
`

const lineAnimation = ({ menuOpen, position, theme }) => {
  const { palette } = theme

  if (menuOpen && position) {
    return `
      transform: rotate(${position === 'top' ? `-45deg` : `45deg`}) translate(${
      position === 'top' ? `-8px, 8px` : `-8px,-8px`
    });
    background: ${palette.grayscale[1]}
    `
  }

  if (menuOpen && !position) {
    return `opacity: 0`
  }

  return ''
}

export default MobileNav
