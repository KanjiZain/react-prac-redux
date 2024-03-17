import React, { useState } from "react";

interface IColorchangeprop {
  defaultcolor?: string;
}

const Colorchanger: React.FC<IColorchangeprop> = ({
  defaultcolor = "white",
}) => {
  const [currentColor, setCurrentColor] = useState(defaultcolor);

  const changeColor = (color: string) => {
    setCurrentColor(color);
  };

  return (
    <div
      style={{ backgroundColor: currentColor, minHeight: "100vh", color: "white" }}
    >
      <h1 style={{ backgroundColor: currentColor}}>Color Changer</h1>
      <div>
        <button onClick={() => changeColor("black")}>Change to Black</button>
        <button onClick={() => changeColor("white")}>Change to White</button>
      </div>
    </div>
  );
};

export default Colorchanger;
