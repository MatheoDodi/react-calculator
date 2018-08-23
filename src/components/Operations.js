import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Divide, Multiply, Minus, Plus, Equals } from './styledComponents/Styled';


const operations = (props) => {
    return (
        <Fragment>
            <Divide>÷</Divide>
            <Multiply>×</Multiply>
            <Minus>-</Minus>
            <Plus>+</Plus>
            <Equals>=</Equals>
        </Fragment>
    )
}

export default operations;