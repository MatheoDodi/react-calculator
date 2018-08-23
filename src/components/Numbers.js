import React, { Fragment } from 'react';
import { Ac, Zer, One, Two, Three, Four, Five, Six, Seven, Eight, Nine } from './styledComponents/Styled';

const numbers = ( props ) => {
    return (
        <Fragment>
            <Ac>AC</Ac>
            <Zer>0</Zer>
            <One>1</One>
            <Two>2</Two>
            <Three>3</Three>
            <Four>4</Four>
            <Five>5</Five>
            <Six>6</Six>
            <Seven>7</Seven>
            <Eight>8</Eight>
            <Nine>9</Nine>
        </Fragment>
    )
}

export default numbers;