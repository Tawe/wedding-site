import React from 'react'
import Input from '../../atoms/input'
import Button from '../../atoms/button'
import Label from '../../atoms/label'
import Box from '../../atoms/box'

const RSVPForm = ({ cb }) => (
  <form onSubmit={cb}>
    <Box mb="8px">
      <Label htmlFor="name">YOUR FULL NAME: </Label>
    </Box>
    <Box mb="21px" height="51px">
      <Input name="name" id="name" />
    </Box>

    <Box height="51px" width="100%">
      <Button type="secondary" fullscreen>
        GET STARTED
      </Button>
    </Box>
  </form>
)

export default RSVPForm
