import { styled } from "styled-components"

export const ThemeLink = styled.a`
margin: 20px 0;
font-size: 0.8em;
color: ${(props) => props.theme.colors.AlmostWhite};

&:hover {
    color: ${(props) => props.theme.colors.AlmostWhite};
}

`