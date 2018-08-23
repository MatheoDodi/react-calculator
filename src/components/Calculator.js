import React, { Component } from 'react';
import { Wrapper } from './styledComponents/Styled';
import Numbers from './Numbers';
import Screen from './Screen';
import Operations from './Operations';

class Calculator extends Component {
    state = {
        sum: '',
        diff: 0,
        screen: '',
        operation: ''
    }

    numberHandler = (e) => {
        let num = this.state.screen;
        num += e.target.innerText;
        this.setState( { screen : num } );
    }

    summaryHandler = (e) => {

        this.setState( { screen: '', operation: 'Summary' } );
        let prevNumber = this.state.screen;
        this.setState( { sum: prevNumber } );
    }

    equalsHandler = (e) => {
        const operation = this.state.operation;
        if ( operation === 'Summary') {
            const NumbOnScreen = this.state.screen;
            const SumSoFar = this.state.sum;
            this.setState( { screen: Number(NumbOnScreen) + Number(SumSoFar) } );
        }
    }

    clearScreenHandler = () => {
        this.setState( { sum: '', screen: '', operation: '' } )
    }

    render () {

        return (    
            <Wrapper>
                <Screen>{this.state.screen}</Screen>
                <Operations 
                    equals={this.equalsHandler}
                    add={this.summaryHandler} />
                <Numbers 
                    click={this.numberHandler} 
                    clear={this.clearScreenHandler} />
            </Wrapper>
        )
    }
}

export default Calculator;