import React from "react";

import "./index.css";

const Container = ({ children, style, className, id }) => {
  return (
    <div id={id} className="container" style={style}>
      {children}
    </div>
  );
};

export default Container;
