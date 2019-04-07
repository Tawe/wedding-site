import React, { useRef } from 'react'
import styled from 'styled-components'
import Input from '../../atoms/input'
import Button from '../../atoms/button'

const RSVPForm = ({ cb }) => (
  <form onSubmit={cb}>
    <Input name="name" />
    <Button type="secondary">Next Step</Button>
  </form>
)

export default RSVPForm
