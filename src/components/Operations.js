import React, { Fragment } from 'react';
import { Divide, Multiply, Minus, Plus, Equals } from './styledComponents/Styled';


const operations = (props) => {
    return (
        <Fragment>
            <Divide className="operation" onClick={props.divide}>÷</Divide>
            <Multiply className="operation" onClick={props.multiply}>×</Multiply>
            <Minus className="operation" onClick={props.minus}>-</Minus>
            <Plus className="operation" onClick={props.add}>+</Plus>
            <Equals className="operation" onClick={props.equals}>=</Equals>
        </Fragment>
    )
}

export default operations;