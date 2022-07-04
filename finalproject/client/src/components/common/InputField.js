import React, { useState } from "react";
import "./styles/InputField.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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
  errors = {},
}) {
  const [showPassword, setShowPassword] = useState(false);
  function handleToggleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="inputField">
      <label className={`label ${labelClass || ""}`} htmlFor={id || name}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id || name}
          name={name}
          className={`textarea input ${inputClass || ""} ${
            errors[name] ? "invalid" : ""
          }`}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={value}
          rows={3}
        />
      ) : type === "password" ? (
        <div className="passwordContainer">
          <input
            id={id || name}
            name={name}
            className={`input ${inputClass || ""} ${
              errors[name] ? "invalid" : ""
            }`}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={handleOnChange}
            placeholder={placeholder}
          />
          {showPassword ? (
            <AiFillEye onClick={handleToggleShowPassword} />
            
          ) : (
            <AiFillEyeInvisible onClick={handleToggleShowPassword} />
          )}
        </div>
      ) : (
        <input
          id={id || name}
          name={name}
          className={`input ${inputClass || ""} ${
            errors[name] ? "invalid" : ""
          }`}
          type={type}
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
        />
      )}
      {errors[name] && (
        <div key={errors} className="error">
          {errors[name]}
        </div>
      )}
    </div>
  );
}

export default InputField;
