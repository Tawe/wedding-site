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
    thanks: '',
  })
  const getName = e => {
    e.preventDefault()
    setState({
      name: e.currentTarget.name.value,
      error: false,
      thanks: false,
    })
  }

  const moveToThanks = message => setState({ thanks: message })

  return (
    <RSVPSection>
      <RSVPWrap pt="1px" pb="100px" width={['90%', '405px']} id="RSVP">
        <SectionTitle title="RSVP" />
        {!state.name && !state.thanks && <RSVPForm cb={getName} />}
        <Query
          query={GetAccommodations}
          variables={{ name: state.name }}
          skip={!state.name}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading..</p>
            return (
              <div>
                {console.log(data && data.guests[0].notes)}
                {state.thanks ? (
                  <RSVPThanks>
                    Your attendance has been confirmed. We are so thrilled that
                    you can make it! :clap:
                  </RSVPThanks>
                ) : (
                  <>
                    {(error || (data && data.guests.length === 0)) && (
                      <div>
                        <RSVPForm cb={getName} />
                        <p>There was an error</p>
                      </div>
                    )}
                    <div>
                      {data && data.guests.length !== 0 && state.name && (
                        <RSVPView
                          {...data.guests[0]}
                          cb={() => moveToThanks(data.guests[0].notes)}
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          }}
        </Query>
      </RSVPWrap>
    </RSVPSection>
  )
}

const RSVPWrap = styled(Box)`
  margin: auto;
`

const RSVPSection = styled.section`
  background-color: ${props => props.theme.palette.secondary[2]};
  input,
  checkbox,
  textarea {
    background: none;
  }
`

const RSVPThanks = styled.div`
  text-align: center;
  margin-top: 17px;
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
      notes
      plusOne {
        name
      }
    }
  }
`

export default RSVP
