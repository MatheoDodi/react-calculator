import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
    grid-column: 1 / -1;
    text-align: end;
    color: white;
    background-color: #9E8164;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1rem;
    grid-area: display;
    display: grid;
    align-items: center;
`

const Text = styled.span`
    height: 50px;
`

const screen = ( props ) => {
    return (
        <Display>
            <Text>{props.previousSum}</Text>
            <Text>{props.children}</Text>
        </Display>
    )
}

export default screen;