import React from "react";

import "./index.css";

const Container = ({ children, style }) => {
  return (
    <div className="container" style={style}>
      {children}
    </div>
  );
};

export default Container;
