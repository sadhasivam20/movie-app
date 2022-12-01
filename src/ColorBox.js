import React from 'react';



export function ColorBox({ color }) {
  const styless = {
    width: "250px",
    height: "25px",
    background: color,
    marginTop: "10px",
  };
  return (
    <div style={styless}>
    </div>
  );
}
;
