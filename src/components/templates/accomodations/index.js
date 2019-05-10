import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import theme from '../../../theme'
import { Flex, Box, Section } from '../../atoms/box'
import AccomodationsBlock from '../../molecules/accommodationblock'
import SetionTitle from '../../molecules/sectiontitle'

const Accomodations = () => (
  <Query query={GetAccommodations}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return (
        <Section mb="92px" id="accommodations">
          <SetionTitle
            title="Accommodations"
            byline={
              <Box fontSize={theme.fontsizes[3]} px="10px" letterSpacing="0px">
                Blocks of rooms have been reserved at&nbsp;
                {data.accommodations[0].venue}. Call with a credit card and
                mention the Kailey/John wedding to receive a group rate.
              </Box>
            }
          />
          <Flex
            flexDirection={['column', 'row']}
            justifyContent="space-around"
            maxWidth="700px"
            m="auto"
            minHeight="234px"
          >
            {data.accommodations.map((accomodation, index) => (
              <React.Fragment key={accomodation.id}>
                <Box mb={['50px', 0]}>
                  <AccomodationsBlock {...accomodation} />
                </Box>
                {index === 0 && (
                  <Box
                    width="1px"
                    opacity="0.14"
                    background={theme.palette.secondary[4]}
                  />
                )}
              </React.Fragment>
            ))}
          </Flex>
        </Section>
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
