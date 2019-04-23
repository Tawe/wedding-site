import React, { useRef } from 'react'
import styled from 'styled-components'
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
      <Input name="name" id="name" fullscreen placeholder="Ex: Tom Wilson" />
    </Box>

    <Button type="secondary" fullscreen>
      GET STARTED
    </Button>
  </form>
)

export default RSVPForm
