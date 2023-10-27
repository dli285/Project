import styled from "styled-components";

export const LoaderDiv = styled.div`
    color: Lavender;
    height: 400px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    .loadingIcon {
        font-size:3rem;
        animation: spin 2s linear infinite;
    }
    span {
        font-size: 22px;
        margin-top: 10px;
    }
    @keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    }

`