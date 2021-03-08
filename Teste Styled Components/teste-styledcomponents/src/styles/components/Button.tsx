import styled from 'styled-components'

export const ButtonStyled = styled.button`
    display: inline-block;
    color: palevioletred;
    height: 100%;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;

    &:hover{
        background: transparent;
        text-decoration: none;
    }

    &:active{
        border: 0;
    }

    &:checked{
        border: 0;
    }

    &:paused{
        border: 0;
    }
`