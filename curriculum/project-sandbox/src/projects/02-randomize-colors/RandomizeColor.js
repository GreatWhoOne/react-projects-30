import React from "react";
import Title from "../components/Title";

function RandomizeColor() {
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleSecClick = (e) => {
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  return (
    <div className="container m-auto text-center">
      <Title text={"Randomize Color"} classes={"mb-4"}></Title>
      <button className="btn btn-danger" onClick={handleSecClick}>
        Click me
      </button>
      <button className="btn btn-success" onClick={handleSecClick}>
        Click me
      </button>
      <button className="btn btn-primary" onClick={handleSecClick}>
        Click me
      </button>
      <button className="btn btn-warning" onClick={handleSecClick}>
        Click me
      </button>
    </div>
  );
}

export default RandomizeColor;
