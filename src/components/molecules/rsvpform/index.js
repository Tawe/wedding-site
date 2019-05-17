import React from 'react'
import { Input } from '../../atoms/input'
import Button from '../../atoms/button'
import Label from '../../atoms/label'
import { Box } from '../../atoms/box'
import theme from '../../../theme'

const RSVPForm = ({ cb }) => (
  <form onSubmit={cb}>
    <Box mb="8px">
      <Label htmlFor="name">YOUR FULL NAME: </Label>
    </Box>
    <Box mb="21px" height="51px">
      <Input name="name" id="name" />
      <Box mt="6px" mb="20px" fontSize={theme.fontsizes[1]}>
        *please enter one name exactly as it is written on your invite
      </Box>
    </Box>

    <Box height="51px" width="100%" mt="55px">
      <Button type="secondary" fullscreen>
        GET STARTED
      </Button>
    </Box>
  </form>
)

export default RSVPForm
