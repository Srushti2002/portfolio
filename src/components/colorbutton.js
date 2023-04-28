import React from "react";

export default function ColorButton() {
  const [color, setColor] = React.useState('#33272A');
  const [bgColor, setBgColor] = React.useState('#FAEEE7');

  return (
    <button
      style={{ color: color, backgroundColor: bgColor }}
      onClick={() => {
        setColor('#000000');
        setBgColor('#ffffff');
      }}
    >
      Change Colors
    </button>
  );
}

