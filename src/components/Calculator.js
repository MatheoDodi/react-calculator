import React, { Component } from 'react';
import { Wrapper } from './styledComponents/Styled';
import Number from './Number';
import Screen from './Screen';

class Calculator extends Component {
    state = {
        sum: 0,
        diff: 0
    }


    render () {

        return (    
            <Wrapper>
                <Screen>{this.state.sum}</Screen>
                <Number>1</Number>
            </Wrapper>
        )
    }
}

export default Calculator;