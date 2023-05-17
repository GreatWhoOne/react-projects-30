import React from "react";
import Alert from "../components/Alert";

function AlertApp() {
  return (
    <div className="container mx-auto">
      <Alert type={"success"} message={"Successful login"}></Alert>
      <Alert type={"info"} message={"Time triggered"} delay={true}></Alert>
    </div>
  );
}

export default AlertApp;
