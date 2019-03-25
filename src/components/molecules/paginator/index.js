import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'

import Circle from '../../atoms/circle'

const Paginator = () => {
  const [active, setActive] = useState(0)
  console.log(active)
  return (
    <Flex justifyContent="center" alignItems="center">
      <Circle
        active={!active || active === 1 ? true : false}
        onClick={() => {
          setActive(1)
        }}
      >
        1
      </Circle>
      <Line />
      <Circle
        active={active === 2 ? true : false}
        onClick={() => {
          setActive(2)
        }}
      >
        2
      </Circle>
      <Line />
      <Circle
        active={active === 3 ? true : false}
        onClick={() => {
          setActive(3)
        }}
      >
        3
      </Circle>
    </Flex>
  )
}

const Line = styled('div')`
  height: 1px;
  width: 250px;
  vertical-align: middle;
  background-color: #000;
`

export default Paginator
