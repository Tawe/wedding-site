import React from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

import DetailsBlock from '../../molecules/detailsblock'

const Details = () => (
  <DetailsWrapper id="details">
    <Box py={50}>
      {Copy.map(item => (
        <DetailsBlock key={item.title} {...item} />
      ))}
    </Box>
  </DetailsWrapper>
)

const Copy = [
  {
    title: 'Where',
    bold: 'The thinkers lodge',
    info: 'Pugwash, Nova Scotia',
  },
  {
    title: 'When',
    bold: 'SEPTEMBER 01, 2019',
    info: 'Ceremony 4pm // Reception 6pm',
  },
]

const DetailsWrapper = styled.section`
  background-color: ${props => props.theme.palette.primary};
`

export default Details
