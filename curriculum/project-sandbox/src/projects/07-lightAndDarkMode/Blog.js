import React, { useContext } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { ThemeContext } from "./context/theme-context";
export default function Blog() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="container p1">
      <Title text={`My Blog with ${theme} Theme`} />
      <span style={{ position: "absolute", top: 10, right: 10 }}>
        <Button
          text={theme === "Dark" ? "Light" : "Dark"}
          btnClass={`${theme === "Dark" && "btn-light"}`}
          onClick={changeTheme}
        ></Button>
      </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      </p>
    </div>
  );
}
