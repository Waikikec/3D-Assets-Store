import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size: 12px;
    color: grey;
    padding: 10px 0px;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid grey;

    /* &:invalid[blur="true"] {} {
      display: block;
    } */
`;

const Span = styled.span`
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;

    &:invalid[blur="true"] ${Input}{
      border: 1px solid red;
    }
`;

// input: invalid[blur = "true"] {
//   border: 1px solid red;
// }

// input: invalid[blur = "true"]~span {
//   display: block;
// }

const FormInput = (props) => {
  const [blur, setBlur] = useState(false);
  const { label, errorMsg, onChange, onBlur, id, ...inputProps } = props;

  const handleBlur = (e) => {
    setBlur(true);
  }

  return (
    <>
      {/* <Form> */}
      <Label>{label}</Label>
      <Input
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={() => inputProps.name === 'confirmPassword' && setBlur(true)}
        blur={blur.toString()}
      />
      <Span>{errorMsg}</Span>
      {/* </Form> */}
    </>
  );
};

export default FormInput;
