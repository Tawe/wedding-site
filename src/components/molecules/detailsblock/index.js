import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

import { SecondaryBold } from '../../atoms/fonts'

const DetailsBlock = ({ title, bold, info }) => (
  <Flex flexDirection="column" alignItems="center" m={53}>
    <TitleStyles mb={16}>{title}</TitleStyles>
    <BoldStyles mb="5px">{bold}</BoldStyles>
    <InfoStyles>{info}</InfoStyles>
  </Flex>
)

const TitleStyles = styled(Box)`
  ${SecondaryBold}
  font-size: ${props => props.theme.fontsizes[4]};
`

const BoldStyles = styled(Box)`
  letter-spacing: 1px;
  font-size: ${props => props.theme.fontsizes[1]};
  font-weight: ${props => props.theme.fontweights.bold};
  text-transform: uppercase;
`

const InfoStyles = styled.span`
  font-size: ${props => props.theme.fontsizes[3]};
`

export default DetailsBlock
