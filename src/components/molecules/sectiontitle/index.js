import React from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

import { SecondaryBold, PrimaryReg } from '../../atoms/fonts'

const SectionTitle = ({ title, byline }) => (
  <SectionTitleWrap mt={92} mb={42}>
    <Title mb="5px">{title}</Title>
    <ByLine>{byline}</ByLine>
  </SectionTitleWrap>
)

const SectionTitleWrap = styled(Box)`
  text-align: center;
`

const Title = styled(Box)`
  ${SecondaryBold};
  font-size: ${props => props.theme.fontsizes[4]};
  letter-spacing: 0.015rem;
`

const ByLine = styled.div`
  ${PrimaryReg};
  font-size: ${props => props.theme.fontsizes[1]};
  max-width: 560px;
  line-height: 1.5rem;
  letter-spacing: 1px;

  margin: auto;
  color: ${props => props.theme.palette.grayscale[3]};
`

export default SectionTitle
