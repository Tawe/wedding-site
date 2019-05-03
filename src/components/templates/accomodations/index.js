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
        <AccomodationsSetion id="accommodations">
          <SetionTitle title="Accomodations" />
          <AccomodationsP>
            Blocks of rooms have been reserved at
            {data.accommodations[0].venue}. Call with a credit card and mention
            the Kailey/John wedding to receive a group rate.
          </AccomodationsP>
          <AccomodationsFlex
            flexDirection={['column', 'row']}
            justifyContent="space-around"
          >
            {data.accommodations.map((accomodation, index) => (
              <>
                <Box mb={['50px', 0]} key={accomodation.id}>
                  <AccomodationsBlock {...accomodation} />
                </Box>
                {index === 0 && <Line />}
              </>
            ))}
          </AccomodationsFlex>
        </AccomodationsSetion>
      )
    }}
  </Query>
)

const AccomodationsSetion = styled.section`
  margin-bottom: 60px;
`

const Line = styled.div`
  width: 1px;
  opacity: 0.14;
  background: ${props => props.theme.palette.secondary[4]};
`

const AccomodationsFlex = styled(Flex)`
  max-width: 700px;
  margin: auto;
  min-height: 234px;
`

const AccomodationsP = styled.p`
  font-size: 16px;
  max-width: 570px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 54px;
  line-height: 1.6;
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
