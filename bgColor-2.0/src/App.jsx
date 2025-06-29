import { useState } from "react";
import Btn from "./components/button";
// import './App.css'

function App() {
  const [color, setColor] = useState("#222222");
  // console.log(color);

  // function changeColor(color){
  //   setColor(color);

  // }
  const colorList = [
    "Red",
    "yellow",
    "#56737f",
    "pink",
    "blue",
    "green",
    "orange",
    "white",
    "skyblue",
    "violet",
    "indigo",
  ];

  return (
    <>
      <div
        className="w-full flex justify-center items-end h-screen bg-gray-950"
        style={{ backgroundColor: color }}
      >
        {colorList.map((col) => (
          <Btn key={col} color={col} setColor={setColor} />
        ))}
      </div>
    </>
  );
}

export default App;
