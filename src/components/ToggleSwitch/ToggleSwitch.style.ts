import styled from "styled-components";

export const ToggleDiv = styled.div`
    .ToggleLabel {
        position: relative;
        display: inline-block;
        width: 60px;
        height:40px;
    }
    .ToggleInput {
        opacity:0;
        width:0;
        height:0;
    }
    .Slider {
        border-radius: 30px;
        position:absolute;
        cursor: pointer;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color:white;
        transition:0.3s;
    }
    .Slider:before {
        border-radius:50%;
        position: absolute;
        content:"";
        top: 7px;
        height:26px;
        width:26px;
        left:4px;
        bottom:4px;
        background-color: ${(props) => props.theme.colors.AlmostWhite};
        transition: 0.3s;
    }

    .ToggleInput:checked + .Slider {
        background-color:black
    }

    .ToggleInput:checked + .Slider:before{
        transform: translateX(26px)
    }

`
