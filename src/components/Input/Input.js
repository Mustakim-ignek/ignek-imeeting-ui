import React, { useState } from "react";
import "./Input.css";

/**
 *
 * @param {{type:string,id:any,name:string,value:string|number|readonly ,onChange:func|object,label:string,required:boolean,onBlur:func|object,isInvalid:string}} props
 */

const Input = (props) => {
  const {
    type,
    id,
    name,
    value,
    onChange,
    label,
    required,
    isInvalid,
    onBlur,
  } = props;
  return (
    <>
      <div className={`inputContainer ${isInvalid && isInvalid}`}>
        <input
          autoComplete="off"
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`form-control ${isInvalid && isInvalid}`}
          required={required ? "required" : ""}
          onBlur={onBlur}
        />
        <label className="floatLabel" htmlFor={id}>
          {label} {required && <span>*</span>}{" "}
        </label>
      </div>
    </>
  );
};

export default Input;
