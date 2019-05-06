import React, { useState } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Box } from '../../atoms/box'
import RSVPForm from '../../molecules/rsvpform'
import RSVPView from '../../molecules/rsvpview'
import SectionTitle from '../../molecules/sectiontitle'
import Button from '../../atoms/button'

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

  const moveToThanks = attending =>
    setState({ thanks: true, attending: attending, name: state.name })

  return (
    <RSVPSection>
      <Box m="auto" pt="1px" pb="100px" width={['290px', '405px']} id="RSVP">
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
                {state.thanks ? (
                  <Box mt="17px" textAlign="center" lineHeight="1.5rem">
                    {state.attending ? (
                      <>
                        Your attendance has been confirmed. We are so thrilled
                        that you can make it! 👏
                      </>
                    ) : (
                      <>Sorry to hear you are unable to attend 😢</>
                    )}
                    <Box mt="21px">
                      <Button
                        type="secondary"
                        onClick={() =>
                          setState({ thanks: false, name: state.name })
                        }
                      >
                        Back
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <>
                    {(error ||
                      (!error && (data && data.guests.length === 0))) && (
                      <div>
                        <RSVPForm cb={getName} />
                        <p>There was an error</p>
                      </div>
                    )}
                    <div>
                      {data && data.guests.length !== 0 && state.name && (
                        <RSVPView
                          {...data.guests[0]}
                          cb={attending => moveToThanks(attending)}
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          }}
        </Query>
      </Box>
    </RSVPSection>
  )
}

const RSVPSection = styled.section`
  background-color: ${props => props.theme.palette.secondary[2]};
  input,
  checkbox,
  textarea {
    background: none;
    box-sizing: border-box;
    border-radius: none;
    box-shadow: none;
  }
`

const GetAccommodations = gql`
  query guests($name: String!) {
    guests(where: { name: $name }) {
      id
      name
      firstName
      songRequest
      isAttending
      hasRSVPed
      message
      greeting
      hasChildren
      childrenAttending
      plusOne
      hasPlusOne
    }
  }
`

export default RSVP
