import React, { Component } from 'react';
import { Wrapper } from './styledComponents/Styled';
import Numbers from './Numbers';
import Screen from './Screen';
import Operations from './Operations';

class Calculator extends Component {
    state = {
        sum: 0,
        diff: 0
    }


    render () {

        return (    
            <Wrapper>
                <Screen>{this.state.sum}</Screen>
                <Operations />
                <Numbers />
            </Wrapper>
        )
    }
}

export default Calculator;