import React from "react";
import "./Button.css";

/**
 *
 * @param {{type: string,styleType:string, otherClass: object, onClick: func,backgroundColor:string ,color:string,style:object,label:string}} props
 */


const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`custom-btn btn-${props.styleType} ${props.otherClass ? props.otherClass : ''}`}
      onClick={props.onClick}
      style={{
        ...props.style,
      }}
    >
      {props.label}
    </button>
  );
};

// Button.propTypes = {
//   color: PropTypes.string || '',
//   children: PropTypes.node,
//   type: PropTypes.string,
//   onClick: PropTypes.func,
//   children: PropTypes.element.isRequired,
//   backgroundColor: PropTypes.string,
//   style: PropTypes.object,
//   otherClass: PropTypes.string,
// };

export default Button;
