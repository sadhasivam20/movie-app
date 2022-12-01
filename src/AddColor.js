import React from 'react';
import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {

  const [color, setColor] = useState("orange");

  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(["blue", "orange", "red", "pink"]);
  return (
    <div>
      <input style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder='enter the color'
        value={color} />
      <button onClick={() => setColorList([...colorList, color])}>Add color</button>
      {colorList.map((ev, index) => (
        <ColorBox key={index} color={ev} />
      ))}
    </div>
  );
}
