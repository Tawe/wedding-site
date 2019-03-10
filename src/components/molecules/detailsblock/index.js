import React from 'react'
import { Flex } from '@rebass/grid'

const DetailsBlock = ({ title, bold, info }) => (
  <Flex flexDirection="column" alignItems="center">
    <span>{title}</span>
    <span>{bold}</span>
    <span>{info}</span>
  </Flex>
)

export default DetailsBlock
