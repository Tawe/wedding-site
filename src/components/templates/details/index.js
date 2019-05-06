import React from 'react'

import theme from '../../../theme'
import { Box, Section } from '../../atoms/box'
import DetailsBlock from '../../molecules/detailsblock'

const Details = () => (
  <Section background={theme.palette.primary} id="details">
    <Box py={50}>
      {Copy.map(item => (
        <DetailsBlock key={item.title} {...item} />
      ))}
    </Box>
  </Section>
)

const Copy = [
  {
    title: 'Where',
    bold: 'Thinkers Lodge',
    info: 'Pugwash, Nova Scotia',
  },
  {
    title: 'When',
    bold: 'SEPTEMBER 01, 2019',
    info: 'Ceremony 4pm //  Reception 6pm',
  },
]

export default Details
