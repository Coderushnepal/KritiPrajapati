import React from "react";
import "./styles/InputField.scss";

function InputField({
  id,
  name,
  label,
  type = "text",
  handleOnChange,
  value,
  placeholder,
  labelClass,
  inputClass,
}) {
  return (
    <div className="inputField">
      <label className={`label ${labelClass || ""}`} htmlFor={id}>
        {label}
      </label>
      <input
        id={id || name}
        name={name}
        className={`input ${inputClass || ""}`}
        type={type}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
