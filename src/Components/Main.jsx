import React from "react";
import { withWhiteLabelContext } from "./withWhiteLabelContext";

const Main = (props) => {
  return (
    <>
      <main className="main">
        <div className="box" style={{ color: props.label.assignedTheme }}>
          {props.label.firstName}
        </div>
        <div className="box" style={{ color: props.label.assignedTheme }}>
          {props.label.lastName}
        </div>
      </main>
    </>
  );
};

export default withWhiteLabelContext(Main);
