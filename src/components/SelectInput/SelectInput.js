import React, { useState, useEffect } from "react";
import { SelectIcon } from "../SvgIcons/SvgIcon";
import "./SelectStyle.css";

/**
 *
 * @param {{type: string, id:string|number,name:string,value:string,label:string,onChange:object|func,onBlur:object|func,required:boolean,option:object,isInvalid:string}} props
 */

const SelectInput = (props) => {
  const [isfocus, setIsFocus] = useState(false);

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
    option,
  } = props;
  return (
    <>
      <div className="customSelect">
        <div className={`SelectContainer ${isInvalid && isInvalid}`}>
          <select
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onClick={() => {
              setIsFocus(true);
            }}
            className={isfocus && "focus"}
          >
            <option value="" disabled selected hidden></option>
            {option.map((item) => (
              <option key={item.id} value={item.value} label={item.value}>
                {item.value}
              </option>
            ))}
          </select>
          <label className="floatLabel" htmlFor={id}>
            {label} {required && <span>*</span>}
          </label>
          <div className="icon">
            <SelectIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectInput;
