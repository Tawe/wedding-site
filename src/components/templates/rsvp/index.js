import React, { useState } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { Box } from '@rebass/grid'
import gql from 'graphql-tag'
import RSVPForm from '../../molecules/rsvpform'
import RSVPView from '../../molecules/rsvpview'
import SectionTitle from '../../molecules/sectiontitle'

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
    <RSVPWrap py={[0, 126]} width={['90%', '405px']}>
      <SectionTitle title="RSVP" />
      {!state.name && <RSVPForm cb={getName} />}
      <Query
        query={GetAccommodations}
        variables={{ name: state.name }}
        skip={!state.name}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading..</p>
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
    </RSVPWrap>
  )
}

const RSVPWrap = styled(Box)`
  margin: auto;
`

const GetAccommodations = gql`
  query guests($name: String!) {
    guests(where: { name: $name }) {
      name
      firstName
      title
      id
      songRequest
      isAttending
      message
      plusOne {
        name
      }
    }
  }
`

export default RSVP
