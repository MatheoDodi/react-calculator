import React, { Fragment } from 'react';
import { Ac, Zer, One, Two, Three, Four, Five, Six, Seven, Eight, Nine } from './styledComponents/Styled';

const numbers = ( props ) => {
    return (
        <Fragment>
            <Ac className="number" onClick={props.clear}>AC</Ac>
            <Zer className="number" onClick={props.click}>0</Zer>
            <One className="number" onClick={props.click}>1</One>
            <Two className="number" onClick={props.click}>2</Two>
            <Three className="number" onClick={props.click}>3</Three>
            <Four className="number" onClick={props.click}>4</Four>
            <Five className="number" onClick={props.click}>5</Five>
            <Six className="number" onClick={props.click}>6</Six>
            <Seven className="number" onClick={props.click}>7</Seven>
            <Eight className="number" onClick={props.click}>8</Eight>
            <Nine className="number" onClick={props.click}>9</Nine>
        </Fragment>
    )
}

export default numbers;