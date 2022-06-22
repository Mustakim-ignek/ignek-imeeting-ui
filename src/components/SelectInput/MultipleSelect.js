import React, { useState } from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import "./SelectStyle.css";

/**
 *
 * @param {{option:array,width:string}} props
 */

const MultipleSelect = ({ option, width }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  //
  function onChange(value, event) {
    if (event.action === "select-option" && event.option.value === "All") {
      this.setState(this.options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === "All"
    ) {
      this.setState([]);
    } else {
      this.setState(value);
    }
  }

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: "166px",
      border: "none",
      color: state.selectProps.menuColor,
      padding: 16,
      paddingBottom: 0,
      borderRadius: "8px",
      boxShadow: " -1px 2px 16px -6px rgba(0,0,0,0.35);",
    }),
    option: (provided, state) => ({
      ...provided,
      width: "auto",
      minWidth: "auto",
      cursor: "pointer",
      borderBottom: "None",
      color: "#0A111F",
      fontWeight: "400 !important",
      fontSize: "14px",
      padding: 0,
      display: "flex",
      alignItems: "center",
      backgroundColor: "transperent",
      paddingBottom: 16,
      ":hover": {
        backgroundColor: "transperrent",
      },
      ":active": {
        backgroundColor: "transperrent",
      },
    }),
  };

  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    if (value && value.some((o) => o.value === "All")) {
      return `${placeholderButtonLabel} All`;
    } else {
      return (
        <span>
          {" "}
          {placeholderButtonLabel} <b>selected {value.length}</b>{" "}
        </span>
      );
    }
  }

  return (
    <>
      <ReactMultiSelectCheckboxes
        width={width}
        rightAligned={true}
        hideSearch={true}
        styles={customStyles}
        options={option}
        onChange={onChange}
        value={selectedOptions}
        placeholderButtonLabel="Role"
        getDropdownButtonLabel={getDropdownButtonLabel}
        setState={setSelectedOptions}
      />
    </>
  );
};

export default MultipleSelect;
