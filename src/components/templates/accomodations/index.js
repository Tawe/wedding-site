import React from 'react'
import gql from 'graphql-tag'
import AccomodationsBlock from '../../molecules/accommodationblock'
import { Query } from 'react-apollo'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

import SetionTitle from '../../molecules/sectiontitle'

const Accomodations = () => (
  <Query query={GetAccommodations}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return (
        <section id="accommodations">
          <SetionTitle
            title="Accomodations"
            byline={`Blocks of rooms have been reserved at ${
              data.accommodations[0].venue
            }. Call with a credit card and mention the
            Kailey/John wedding to receive a group rate.`}
          />
          <Flex flexDirection={['column', 'row']} justifyContent="space-around">
            {data.accommodations.map((accomodation, index) => (
              <Box mb={['50px', 0]} key={accomodation.id}>
                <AccomodationsBlock {...accomodation} />
                {index === 0 && <Line />}
              </Box>
            ))}
          </Flex>
        </section>
      )
    }}
  </Query>
)

const Line = styled.div`
  width: 1px;
  opacity: 0.14;
  background: ${props => props.theme.palette.secondary[4]};
`

export default Accomodations

const GetAccommodations = gql`
  query accommodations {
    accommodations {
      id
      venue
      location
      address
      phone_number
      distance
      link
    }
  }
`
