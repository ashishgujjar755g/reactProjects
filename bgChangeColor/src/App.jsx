import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff"); // Default white

  const getRandomColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    console.log(randomColor);

    setBgColor(randomColor);
  };

  return (
    //fragments bolte hai ise
    <>
      <div
        style={{
          backgroundColor: bgColor,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#000",
        }}
      >
        <h1>Background Color: {bgColor}</h1>
        <button
          className="rounded-xl bg-red-400 mt-2.5 hover:bg-red-700  "
          onClick={getRandomColor}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            border: "1px solid",
          }}
        >
          Change Color
        </button>
      </div>
    </>
  );
}

export default App;
