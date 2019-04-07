import React from 'react'
import styled from 'styled-components'

const Circle = ({ active, children, onClick }) => (
  <CircleStyles onClick={onClick} active={active}>
    {children}
  </CircleStyles>
)

const CircleStyles = styled('div')`
  width: 57px;
  height: 57px;
  border-radius: 30px;
  cursor: pointer;
  color: ${props => (props.active ? '#fff' : '#000')};
  background-color: ${props => (props.active ? '#000' : '#fff')};
  ${props => props.theme.borders[0]};
`

export default Circle
