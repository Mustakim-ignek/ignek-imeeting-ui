import React from 'react'
import './Button.css'
import PropTypes from 'prop-types';


const Button = ({styleType,otherClass,onClick,label,type,style}) => {
  return (
    <button
      type={type}
      className={`custom-btn btn-${styleType} ${
        otherClass ? otherClass : ''
      }`}
      onClick={onClick}
      style={{
        ...style
      }}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  otherClass: PropTypes.string,
  label:PropTypes.string,
};


export default Button
