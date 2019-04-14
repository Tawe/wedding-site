import React from 'react'
import gql from 'graphql-tag'
import AccomodationsBlock from '../../molecules/accommodationblock'
import { Query } from 'react-apollo'
import { Flex, Box } from '@rebass/grid'

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
          <Flex justifyContent="space-around">
            {data.accommodations.map((accomodation, index) => (
              <AccomodationsBlock
                line={index === 0 && true}
                key={accomodation.id}
                {...accomodation}
              />
            ))}
          </Flex>
        </section>
      )
    }}
  </Query>
)

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
