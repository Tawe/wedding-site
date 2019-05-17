import React, { useState } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import { Box, Flex } from '../../atoms/box'
import { Input } from '../../atoms/input'
import Label from '../../atoms/label'
import Button from '../../atoms/button'
import RadioBtns from '../../atoms/radiobtn'
import Checkbox from '../../atoms/checkbox'

const Inputs = [
  {
    name: 'guest',
    copy: 'YOUR GUESTS NAME: ',
    type: 'input',
  },
  {
    name: 'songRequest',
    copy: 'SONG REQUEST: ',
    type: 'input',
    placeholder: 'Ex: Bob Segar - Night Moves',
  },
  {
    name: 'message',
    copy: 'LEAVE US A MESSAGE:',
    type: 'textarea',
  },
]

const RSVPView = ({
  name,
  id,
  greeting,
  hasChildren,
  childrenAttending,
  firstName,
  songRequest,
  isAttending,
  message,
  plusOne,
  hasPlusOne,
  hasRSVPed,
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
      message: newVals.message ? newVals.message.value : '',
      songRequest: newVals.songRequest ? newVals.songRequest.value : '',
      hasRSVPed: true,
      plusOne: newVals.guest ? newVals.guest.value : '',
      childrenAttending:
        newVals.childrenAttending && newVals.childrenAttending.checked,
    }
    setRSVP({ variables: { data, id } })
    cb(state.attending)
  }

  return (
    <Mutation mutation={SetRSVP}>
      {(updateGuest, { data }) => (
        <form onSubmit={e => submitForm(e, updateGuest)}>
          <Box textAlign="center" mt="-17px" mb="51px" lineHeight="1.5rem">
            Hello, {firstName} 👋 {greeting && greeting} Please let us know if
            you can make it!
          </Box>
          <Flex flexDirection="column">
            <Box mb="8px">
              <RadioBtns
                id="isAttending"
                name="isAttending"
                defaultChecked={hasRSVPed && isAttending && 'checked'}
                onChange={() => setState({ attending: true })}
              />
              <Label htmlFor="isAttending">JOYFULLY ACCEPT</Label>
            </Box>
            <Box mb="24px">
              <RadioBtns
                id="notAttending"
                name="isAttending"
                defaultChecked={hasRSVPed && !isAttending && 'checked'}
                onChange={() => setState({ attending: false })}
              />
              <Label htmlFor="isAttending">REGRETFULLY DECLINE</Label>
            </Box>
            {Inputs.map(input => (
              <React.Fragment key={input.name}>
                {((input.name === 'guest' && hasPlusOne) ||
                  input.name !== 'guest') && (
                  <React.Fragment>
                    <Fields
                      {...input}
                      defaultValue={
                        input.name === 'guest' && hasPlusOne
                          ? plusOne
                          : input.name === 'songRequest'
                          ? songRequest
                          : input.name === 'message' && message
                      }
                    />
                    {input.name === 'guest' && hasChildren && (
                      <Box mb="24px">
                        <Checkbox
                          id="childrenAttending"
                          name="childrenAttending"
                          defaultChecked={
                            hasRSVPed && childrenAttending && 'checked'
                          }
                        />
                        <Label htmlFor="childrenAttending">
                          MY CHILDREN WILL BE ATTENDING
                        </Label>
                      </Box>
                    )}
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
            <Box>
              <Button type="secondary" height="51px">
                Submit
              </Button>
            </Box>
          </Flex>
        </form>
      )}
    </Mutation>
  )
}

const Fields = ({ copy, name, defaultValue, type, placeholder }) => (
  <Box
    mb="41px"
    height={type === 'input' ? '51px' : '140px'}
    mt={type !== 'input' ? '20px' : '0'}
  >
    <LabelComponent {...{ name }} {...{ copy }} />
    {type === 'input' ? (
      <InputComponent
        {...{ name }}
        {...{ defaultValue }}
        {...{ placeholder }}
      />
    ) : (
      <TextAreaComponent
        {...{ name }}
        {...{ defaultValue }}
        {...{ placeholder }}
      />
    )}
  </Box>
)

const InputComponent = ({ name, defaultValue, placeholder }) => (
  <Input
    display="block"
    height="51px"
    name={name}
    type="input"
    placeholder={placeholder}
    defaultValue={defaultValue}
  />
)

const TextAreaComponent = ({ copy, name, defaultValue }) => (
  <TextAreaStyles
    id={name}
    name={name}
    type="textarea"
    defaultValue={defaultValue}
  />
)

const LabelComponent = ({ name, copy }) => (
  <Box mb="8px">
    <Label htmlFor={name}>{copy} </Label>
  </Box>
)

const TextAreaStyles = styled.textarea`
  resize: none;
  padding: 10px 0;
  font-size: 12px;
  color: ${props => props.theme.palette.grayscale[1]};
  font-family: ${props => props.theme.fonts.primary};
  ${props => props.theme.borders[0]};
  display: block;
  height: 116px;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
`

const SetRSVP = gql`
  mutation updateGuest($data: GuestUpdateInput!, $id: ID!) {
    updateGuest(data: $data, where: { id: $id }) {
      name
      plusOne
    }
  }
`

export default RSVPView
