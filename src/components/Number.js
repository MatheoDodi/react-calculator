import React from 'react';
import { Numbox } from '../components/styledComponents/Styled';

const number = ( props ) => {
    return (
        <Numbox >
            {props.children}
        </Numbox>
    )
}

export default number;