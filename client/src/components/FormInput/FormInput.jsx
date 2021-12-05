import { useState } from 'react';
import './FormInput.css';

const FormInput = (props) => {
  const [blur, setBlur] = useState(false);
  const { label, errorMsg, onChange, onBlur, id, ...inputProps } = props;

  const handleBlur = (e) => {
    setBlur(true);
  }

  return (
    <div className="FormInputWrapper">
      <label className="FormInputLabel">{label}</label>
      <input
        className="FormInputField"
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={() => inputProps.name === 'confirmPassword' && setBlur(true)}
        blur={blur.toString()}
      />
      <span className="FormInputSpan">{errorMsg}</span>
    </div>
  );
};

export default FormInput;
