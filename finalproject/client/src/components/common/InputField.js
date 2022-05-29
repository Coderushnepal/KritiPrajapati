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
  errors = {},
}) {
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
