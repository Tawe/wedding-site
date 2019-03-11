import React from 'react'
import styled from 'styled-components'
import DetailsBlock from '../../molecules/detailsblock'

const Details = () => (
  <DetailsWrapper>
    {Copy.map(item => (
      <DetailsBlock key={item.title} {...item} />
    ))}
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

const DetailsWrapper = styled('section')`
  background-color: ${props => props.theme.palette.primary};
  width: 100%;
`

export default Details
