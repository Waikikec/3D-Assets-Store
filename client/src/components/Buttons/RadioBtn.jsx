import React, { useState } from 'react';
import styled from "styled-components";

const RadioWrapper = styled.div`
  display: inline-block;
`;

const Mark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #777777;
  width: 14px;
  height: 14px;
  left: 0;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #03a9f4;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`;

const Input = styled.input`
    position: absolute;
    visibility: hidden;
    display: none;
    &:checked + ${Mark} {
        &::after {
        width: 10px;
        height: 10px;
        opacity: 1;
        left: 2px;
        top: 2px;
        }
    }
`;

const Label = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
  ${props =>
        props.disabled &&
        `
        cursor: not-allowed;
        opacity: 0.4;
    `}
`;

const RadioBtn = ({ name, children }) => {
    // const [select, setSelect] = useState('');
    // const handleRadioBtn = event => {
    //     const value = event.target.value;
    //     setSelect(value.toLowerCase());
    // };

    return (
        <RadioWrapper>
            <Label>
                <Input
                    type="radio"
                    name={name}
                    value={children}
                    // checked={select === children}
                    // onChange={e => handleRadioBtn(e)}
                />
                <Mark />
                {children}
            </Label>
        </RadioWrapper>
    )
};

export default RadioBtn;
