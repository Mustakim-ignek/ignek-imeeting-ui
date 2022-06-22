import React from "react";


/**
 *
 * @param {{src:string}} props
 */

const PageLoader = (props) => {
  return (
    <div className="loader-container" style={{ width: "100%", height: "auto" }}>
      <img
        src={props.src}
        className="loader-img"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default PageLoader;
