import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`


export const Item = styled.div`
    background-color: ${(props) => props.isItem ? 'rgb(216, 233, 31)' : 'aquamarine;'}
    ${(props) => 'color: #fff; font-size: 29px'}
`

export const Text = styled.h2`
    color: red;
`