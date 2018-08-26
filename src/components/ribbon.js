import React from 'react'
import styled from 'styled-components';

import RibbonSVG from '../images/ribbon.svg'


export default ()=>(
    <Container>
        <Copy>COMING SOON</Copy>
    </Container>
)


const Container = styled.div`
    background-image: url(${RibbonSVG});
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    width: 173px;
    float: right;
`

const Copy = styled.div`
    color: #fdfdfe;
    font-family: 'FuturaBook';
    font-size: 8px;
    letter-spacing: 0.3em;
    padding-left: 15px;
`
