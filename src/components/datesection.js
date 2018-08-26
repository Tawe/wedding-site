import React from 'react'
import styled from 'styled-components';


export default ({children}) => (
    <Container>
        <Copy>
        {children}
        </Copy>
    </Container>
)

const Container  =  styled.div`
    padding:10px;
    border-top: solid 2px #9B712A;
    border-bottom: solid 2px #9B712A;
`

const Copy = styled.div`
  color: #0C2237;
  font-family: 'FuturaBook';
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 3px;
`