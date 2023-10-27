import { styled } from "styled-components"

type StyledInput = {
    $isError?:boolean
}

export const ThemeInput = styled.input<StyledInput>`
position: relative;
width: 100%;
padding: 20px 10px 10px;
background: transparent;
outline: none;
border: none;
box-shadow: none;
color: #DCDCDC;
font-size: 1em;
letter-spacing: 0.05em;
transition: 0.5s;
z-index: 10;
`
export const ThemeInputError = styled.span<StyledInput>`
display: block;
margin: 0 0 20px;
margin-top:5px;
${(props) => props.$isError && `
    color: red
`}
`