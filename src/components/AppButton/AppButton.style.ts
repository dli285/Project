import React from "react";
import styled from "styled-components";

export const ThemeButton = styled.button`
border: none;
outline: none;
padding: 9px 25px;
background: white;
cursor: pointer;
font-size: 0.9em;
border-radius: 5px;
font-weight: 600px;
width: 100px;

&:disabled {
    cursor: default;
    color: ${(props) => props.theme.colors.AlmostWhite};
}
`