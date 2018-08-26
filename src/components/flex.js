import React from 'react'
import styled from 'styled-components';

export default ({children, ...rest})=>(
    <Flex {...rest}>
        {children}
    </Flex>
)

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction && props.direction};
    justify-content: ${props => props.justify && props.justify};
    height: ${props=>props.height}
`