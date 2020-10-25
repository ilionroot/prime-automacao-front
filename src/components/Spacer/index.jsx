import React from 'react';

import './index.css'

const Spacer = ({ style }) => {
  return (
    <span className="spacer" style={style}>
      <div id="space1"></div>
      <div id="space2"></div>
    </span>
  );
}

export default Spacer;