import React from 'react';

import './index.css';

const InfDiv = (props) => {
  return (
    <div className="infDiv" style={props.style}>{props.children}</div>
  );
};

export default InfDiv;