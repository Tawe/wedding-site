import React from 'react'

import { Box } from '../../atoms/box'
import Button from '../../atoms/button'

const Directions = () => {
  return (
    <Box
      textAlign="center"
      m="-80px auto 20px"
      position="relative"
      background="white"
      p="60px"
      maxWidth="800px"
    >
      <Button
        href="https://maps.google.com/?saddr=My%20Location&daddr=249 Water St, Pugwash, NS B0K 1L0"
        target="_blank"
        rel="noreferrer"
      >
        GET DIRECTIONS
      </Button>
    </Box>
  )
}

export default Directions
