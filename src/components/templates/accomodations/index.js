import React from 'react'
import gql from 'graphql-tag'
import AccomodationsBlock from '../../molecules/accommodationblock'
import { Query } from 'react-apollo'

const Accomodations = () => (
  <Query query={GetAccommodations}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      console.log(data)
      if (error) return <p>Error :(</p>

      return (
        <div>
          <h3>Accomodations</h3>
          <p>
            {`Blocks of rooms have been reserved at The ${
              data.accommodations[0].venue
            } and
            ${
              data.accommodations[1].venue
            }. Call with a credit card and mention the
            Kailey/John wedding to receive a group rate.`}
          </p>
          {data.accommodations.map(accomodation => (
            <AccomodationsBlock key={accomodation.id} {...accomodation} />
          ))}
        </div>
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
      phone_number
      distance
      link
    }
  }
`
