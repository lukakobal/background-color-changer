import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h1>🎨 Background Color Changer</h1>
      <div className="buttons">
        <button onClick={() => changeColor("red")}>Red</button>
        <button onClick={() => changeColor("blue")}>Blue</button>
        <button onClick={() => changeColor("green")}>Green</button>
        <button onClick={() => changeColor("yellow")}>Yellow</button>
        <button onClick={() => changeColor("white")}>Reset</button>
      </div>
    </div>
  );
}
