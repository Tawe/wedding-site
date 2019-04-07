import React from 'react'
import { Flex } from '@rebass/grid'
import styled from 'styled-components'

const DetailsBlock = ({ title, bold, info }) => (
  <Flex flexDirection="column" alignItems="center">
    <TitleStyles>{title}</TitleStyles>
    <BoldStyles>{bold}</BoldStyles>
    <InfoStyles>{info}</InfoStyles>
  </Flex>
)

const TitleStyles = styled('span')`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontweights.bold};
  font-size: ${props => props.theme.fontsizes[4]};
`

const BoldStyles = styled('span')`
  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontweights.bold};
  font-size: ${props => props.theme.fontsizes[3]};
  text-transform: uppercase;
`

const InfoStyles = styled('span')`
  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontweights.medium};
  font-size: ${props => props.theme.fontsizes[3]};
`

export default DetailsBlock
