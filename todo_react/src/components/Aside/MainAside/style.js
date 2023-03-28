import { css } from "@emotion/react";

export const OutAside = css`
    position: fixed;
    top: 0;
    left: 0px;
    z-index: 99;
    width: 300px;
    height: 100%;
    transition: left 1s ease;
`;

export const OpenAside = css`
    position: fixed;
    top: 0;
    left: -300px;
    z-index: 99;
    width: 300px;
    height: 100%;
    transition: left 1s ease;
`;


export const inOutButton = css`
    position: absolute;
    top: 50%;
    left: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 70px;
    border: none;
    border-top-right-radius: 20px ;
    border-bottom-right-radius: 20px;
    text-align: center;
    cursor: pointer;
    background-color: #ffffff00;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`