import React, { useState } from "react";
import Title from "../components/Title";

function SignatureApp() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };

  document.body.style.background = "#eee";

  return (
    <div className="container text-center">
      <Title classes={"title"} text={!name ? "Please type your name" : name} />
      <Title
        classes={"main-title mb-4"}
        text={!date ? "Your Birth Date" : date}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante vel
        mi ornare egestas eu non ligula. Nullam ornare quam in dolor suscipit
        fringilla. Nulla facilisi. Nam sodales luctus quam vitae ornare. Morbi
        id arcu sed eros pellentesque maximus. Sed tincidunt in tellus id
        dignissim. Morbi porta justo vel risus vulputate, quis pellentesque dui
      </p>

      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}

export default SignatureApp;
