import React from "react";
import { withWhiteLabelContext } from "./withWhiteLabelContext";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <img src={props.label.headerIcon} className="App-logo" alt="logo" />
      </header>
    </>
  );
};

export default withWhiteLabelContext(Header);
