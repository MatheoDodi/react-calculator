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

    operationCheck = (prevOperation, newOperation) => {
        if ( prevOperation === 'plus') {
            const NumbOnScreen = this.state.screen;
            const totalSoFar = this.state.total;
            this.setState( { total: Number(NumbOnScreen) + Number(totalSoFar), screen: '', operation: newOperation } );
        } else if ( prevOperation === 'minus' ) {
            const NumbOnScreen = this.state.screen;
            const totalSoFar = this.state.total;
            this.setState( { total: Number(totalSoFar) - Number(NumbOnScreen), screen: '', operation: newOperation} );
        } else if (prevOperation === 'multiply') {
            const NumbOnScreen = this.state.screen;
            const totalSoFar = this.state.total;
            this.setState( { total: Number(totalSoFar) * Number(NumbOnScreen), screen: '', operation: newOperation} );
        } else if (prevOperation === 'divide') {
            const NumbOnScreen = this.state.screen;
            const totalSoFar = this.state.total;
            this.setState( { total: Number(totalSoFar) / Number(NumbOnScreen), screen: '', operation: newOperation} );
        }
    }

    equalsHandler = (e) => {
        const operation = this.state.operation;
        if ( operation === 'plus') {
            const NumbOnScreen = this.state.screen;
            const totalSoFar = this.state.total;
            this.setState( { screen: Number(NumbOnScreen) + Number(totalSoFar), total: '' } );
        } else if ( operation === 'minus' ) {
            const NumbOnScreen = this.state.screen;
            const totalSoFar = this.state.total;
            this.setState( { screen: Number(totalSoFar) - Number(NumbOnScreen), total: '' } );
        } else if (operation === 'multiply') {
            const NumbOnScreen = this.state.screen;
            const totalSoFar = this.state.total;
            this.setState( { screen: Number(totalSoFar) * Number(NumbOnScreen), total: '' } );
        } else if (operation === 'divide') {
            const NumbOnScreen = this.state.screen;
            const totalSoFar = this.state.total;
            this.setState( { screen: Number(totalSoFar) / Number(NumbOnScreen), total: '' } );
        }
    }

    numberHandler = (e) => {
        let num = this.state.screen;
        num += e.target.innerText;
        this.setState( { screen : num } );
    }

    plusHandler = (e) => {
        const prevNumber = this.state.screen;
        const numSoFar = this.state.total;
        const operation = this.state.operation;
        if (operation) {
            this.operationCheck(operation, 'plus');
        } else {
            this.setState( { screen: '', operation: 'plus', total: numSoFar +  Number(prevNumber) } );
        }
    }

    minusHandler = () => {
        const prevNumber = this.state.screen;
        const numSoFar = this.state.total;
        const operation = this.state.operation;
        if (operation) {
            this.operationCheck(operation, 'minus');
        } else {
            this.setState( { screen: '', operation: 'minus', total: numSoFar -  Number(prevNumber) } );
        }
    }

    multiplyHandler = () => {
        const prevNumber = this.state.screen; 
        const numSoFar = this.state.total;
        const operation = this.this.state.operation;
        if (numSoFar === 0) {
            this.setState( { screen: '', operation: 'multiply', total: Number(prevNumber) } );
        } else {
            this.setState( { screen: '', operation: 'multiply', total: numSoFar * Number(prevNumber) } );
        }      
    }

    divideHandler = () => {
        const prevNumber = this.state.screen; 
        const numSoFar = this.state.total;
        if (numSoFar === 0) {
            this.setState( { screen: '', operation: 'divide', total:  Number(prevNumber) } );
        } else {
            this.setState( { screen: '', operation: 'divide', total: numSoFar / Number(prevNumber) } );      
        }
    }

    clearScreenHandler = () => {
        this.setState( { total: 0, screen: '', operation: '' } )
    }

    render () {

        return (    
            <Wrapper>
                <Screen previousSum={this.state.total}>{this.state.screen}</Screen>
                <Operations 
                    equals={this.equalsHandler}
                    add={this.plusHandler} 
                    minus={this.minusHandler}
                    multiply={this.multiplyHandler}
                    divide={this.divideHandler} />
                <Numbers 
                    click={this.numberHandler} 
                    clear={this.clearScreenHandler} />
            </Wrapper>
        )
    }
}

export default Calculator;