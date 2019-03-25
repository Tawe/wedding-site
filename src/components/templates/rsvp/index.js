import React, { useState } from 'react'
import RSVPForm from '../../molecules/rsvpform'
import RSVPView from '../../molecules/rsvpview'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const RSVP = () => {
  const [state, setState] = useState({
    name: '',
    error: false,
  })
  const getName = e => {
    e.preventDefault()
    setState({
      name: e.currentTarget.name.value,
      error: false,
    })
  }
  const error = () => {
    setState({
      name: '',
      error: true,
    })
  }

  return (
    <div>
      {!state.name && <RSVPForm cb={getName} />}
      <Query
        query={GetAccommodations}
        variables={{ name: state.name }}
        skip={!state.name}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading..</p>
          data && console.log(data.guests)
          return (
            <div>
              {(error || (data && data.guests.length === 0)) && (
                <div>
                  <RSVPForm cb={getName} />
                  <p>There was an error</p>
                </div>
              )}
              <div>
                {data && data.guests.length !== 0 && state.name && (
                  <RSVPView {...data.guests[0]} />
                )}
              </div>
            </div>
          )
        }}
      </Query>
    </div>
  )
}

const GetAccommodations = gql`
  query guests($name: String!) {
    guests(where: { name: $name }) {
      name
      title
      id
      songRequest
      isAttending
      message
    }
  }
`

export default RSVP
