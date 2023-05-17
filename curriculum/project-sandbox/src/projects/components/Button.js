import React from "react";

function Button({ text, btnClass = "click", icon, onClick }) {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
