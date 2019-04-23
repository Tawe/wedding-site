import React from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

function StyledBox(props) {
  return <BoxStyle {...props}>{props.children}</BoxStyle>
}

const BoxStyle = styled(Box)`
  height: ${props => props.height && props.height};
`

export default StyledBox
