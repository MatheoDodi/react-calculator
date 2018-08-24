import React, { Component } from 'react';
import { Wrapper } from './styledComponents/Styled';
import Numbers from './Numbers';
import Screen from './Screen';
import Operations from './Operations';

class Calculator extends Component {
    state = {
        total: 0,
        screen: '',
        operation: ''
    }

    numberHandler = (e) => {

        let num = this.state.screen;
        num += e.target.innerText;
        this.setState( { screen : num } );
    }

    plusHandler = (e) => {
        const prevNumber = this.state.screen;
        this.setState( { screen: '', operation: 'plus', total: Number(prevNumber) } );
    }

    minusHandler = () => {
        const prevNumber = this.state.screen
        this.setState( { screen: '', operation: 'minus', total: Number(prevNumber) } );
    }

    equalsHandler = (e) => {
        const operation = this.state.operation;
        if ( operation === 'plus') {
            const NumbOnScreen = this.state.screen;
            const totalSoFar = this.state.total;
            this.setState( { screen: Number(NumbOnScreen) + Number(totalSoFar) } );
        } else if ( operation === 'minus' ) {
            const NumbOnScreen = this.state.screen;
            const totalSoFar = this.state.total;
            this.setState( { screen: Number(totalSoFar) - Number(NumbOnScreen) } );
        }
    }

    

    clearScreenHandler = () => {
        this.setState( { total: '', screen: '', operation: '' } )
    }

    render () {

        return (    
            <Wrapper>
                <Screen>{this.state.screen}</Screen>
                <Operations 
                    equals={this.equalsHandler}
                    add={this.plusHandler} 
                    minus={this.minusHandler}/>
                <Numbers 
                    click={this.numberHandler} 
                    clear={this.clearScreenHandler} />
            </Wrapper>
        )
    }
}

export default Calculator;