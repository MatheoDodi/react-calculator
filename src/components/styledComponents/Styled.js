import styled from 'styled-components';

export  const Wrapper = styled.div`
            margin: 0 auto;
            display: grid;
            width: 400px;
            background-color: black;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 85px;
            grid-gap: 1px;
            box-shadow: 7px 7px 5px rgba(0,0,0, .2);
            grid-template-areas: 'display display display display'
                                 'display display display display'
                                 'ac ac ac divide'
                                 'seven eight nine mult'
                                 'four five six minus'
                                 'one two three plus'
                                 'zer zer zer equals'
        `
export  const Ac = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: ac`
export  const Zer = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: zer;
        `
export  const One = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: one;
        `
export  const Two = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: two;
        `
export  const Three = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: three;
        `
export  const Four = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: four;
        `
export  const Five = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: five;
        `
export  const Six = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: six;
        `
export  const Seven = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: seven;
        `
export  const Eight = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: eight;
        `
export  const Nine = styled.div`
            background-color: #E0E0E0;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: nine;
        `
export const Divide = styled.div`
    background-color: #E8964F;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: divide;
`
export const Multiply = styled.div`
    background-color: #E8964F;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: mult;
`
export const Minus = styled.div`
    background-color: #E8964F;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: minus;
`
export const Plus = styled.div`
    background-color: #E8964F;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: plus;
`
export const Equals = styled.div`
background-color: #E8964F;
display: flex;
align-items: center;
justify-content: center;
grid-area: equals;
`
