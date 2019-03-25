import React, { useState } from 'react'
import Button from '../../atoms/button'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const RSVPView = ({ name, id, title, songRequest, isAttending, message }) => {
  console.log(name, id, title, songRequest, isAttending, message)
  const [state, setState] = useState({
    attending: isAttending,
  })
  const submitForm = (e, setRSVP) => {
    e.preventDefault()
    const newVals = e.currentTarget
    console.log(newVals.isAttending.checked ? true : false)
    const data = {
      isAttending: newVals.isAttending.checked ? true : false,
      message: newVals.message.value,
      songRequest: newVals.songRequest.value,
    }
    console.log(id)
    setRSVP({ variables: { data, id } })
    console.log(data)
  }

  return (
    <Mutation mutation={SetRSVP}>
      {(updateGuest, { data }) => (
        <form onSubmit={e => submitForm(e, updateGuest)}>
          <div>Welcome, {title}</div>
          <div>Please Confirm Attendance</div>
          <label>Attending</label>
          <input
            name="isAttending"
            type="checkbox"
            checked={state.attending}
            onChange={() => setState(prevState => !prevState.attending)}
          />
          <input
            name="songRequest"
            type="input"
            placeholder="Enter a song request"
            defaultValue={songRequest}
          />
          <input
            name="message"
            type="textarea"
            placeholder="Enter a Message"
            defaultValue={message}
          />
          <Button type="secondary">Confirm</Button>
        </form>
      )}
    </Mutation>
  )
}

const SetRSVP = gql`
  mutation updateGuest($data: GuestUpdateInput!, $id: ID!) {
    updateGuest(data: $data, where: { id: $id }) {
      name
      plusOne {
        name
      }
    }
  }
`

export default RSVPView
