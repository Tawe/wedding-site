import React, { useState } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Box, Flex } from '@rebass/grid'
import Input from '../../atoms/input'
import Label from '../../atoms/label'
import Button from '../../atoms/button'
import Checkbox from '../../atoms/checkbox'

const RSVPView = ({
  name,
  id,
  title,
  firstName,
  songRequest,
  isAttending,
  message,
  plusOne,
  cb,
}) => {
  const [state, setState] = useState({
    attending: isAttending,
  })
  const submitForm = (e, setRSVP) => {
    e.preventDefault()
    const newVals = e.currentTarget
    const data = {
      isAttending: state.attending,
      message: newVals.message.value,
      songRequest: newVals.songRequest.value,
    }

    setRSVP({ variables: { data, id } })
    cb()
  }

  return (
    <Mutation mutation={SetRSVP}>
      {(updateGuest, { data }) => (
        <form onSubmit={e => submitForm(e, updateGuest)}>
          <Box
            style={{
              textAlign: 'center',
            }}
            mt="-17px"
            mb="51px"
          >
            Hello, {firstName} 👋 Please let us know if you can make it!
          </Box>
          <Flex flexDirection="column">
            <Box mb="8px">
              <Checkbox
                id="isAttending"
                name="isAttending"
                defaultChecked={isAttending && 'checked'}
                onChange={() => setState({ attending: true })}
              />
              <Label htmlFor="isAttending">JOYFULLY ACCEPT</Label>
            </Box>
            <Box mb="24px">
              <Checkbox
                id="notAttending"
                name="isAttending"
                defaultChecked={!isAttending && 'checked'}
                onChange={() => setState({ attending: false })}
              />
              <Label htmlFor="isAttending">REGRETFULLY DECLINE</Label>
            </Box>
            {plusOne && (
              <Box mb="21px" height="51px">
                <Box mb="8px">
                  <Label htmlFor="isAttending">YOUR GUESTS NAME: </Label>
                </Box>
                <Box>
                  <InputStyles
                    name="guest"
                    type="input"
                    defaultValue={plusOne.name}
                  />
                </Box>
              </Box>
            )}
            <Box mb="21px" height="51px">
              <Box mb="8px">
                <Label htmlFor="songRequest">SONG REQUEST: </Label>
              </Box>
              <InputStyles
                id="songRequest"
                name="songRequest"
                type="input"
                placeholder="Ex: Bob Segar - Night Moves"
                defaultValue={songRequest}
              />
            </Box>
            <Box mb="21px" height="51px">
              <Box mb="8px">
                <Label htmlFor="message">LEAVE US A MESSAGE:</Label>
              </Box>
              <TextAreaStyles
                id="message"
                name="message"
                type="textarea"
                defaultValue={message}
              />
            </Box>
            <Button type="secondary" height="51px">
              Submit
            </Button>
          </Flex>
        </form>
      )}
    </Mutation>
  )
}

const InputStyles = styled(Input)`
  display: block;
  height: 51px;
`

const TextAreaStyles = styled.textarea`
  text-transform: uppercase;
  resize: none;
  padding: 10px 0;
  font-size: 12px;
  color: ${props => props.theme.palette.grayscale[1]};
  ${props => props.theme.borders[0]};
  display: block;
  height: 116px;
  width: 100%;
  text-indent: 25px;
`

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
