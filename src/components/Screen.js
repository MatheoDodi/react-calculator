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
`

const screen = ( props ) => {
    return (
        <Display>
            {props.children}
        </Display>
    )
}

export default screen;