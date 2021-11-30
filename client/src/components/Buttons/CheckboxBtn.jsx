import React from 'react'
import styled from "styled-components";

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2em;
`;

const Input = styled.input`
background-color: teal;
    position: absolute;
`;

const Label = styled.label`
    position: relative;
    margin-right: 1em;
    padding-left: 2em;
    padding-right: 1em;
    line-height: 2;
    cursor: pointer;
    &:before {
        box-sizing: border-box;
        content: " ";
        position: absolute;
        top: 0.3em;
        left: 0;
        display: block;
        width: 1.4em;
        height: 1.4em;
        border: 2px solid white;
        border-radius: .25em;
        z-index: -1;
    }
`;

const CheckboxBtn = () => {
    return (
        <CheckboxContainer>
            <Input type="checkbox"></Input>
            <Label>Check this</Label>
        </CheckboxContainer>
    )
}

export default CheckboxBtn
