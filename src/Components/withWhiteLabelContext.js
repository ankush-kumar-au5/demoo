import React from "react";
import { useGlobalContext } from "../App";

export const withWhiteLabelContext = (Comp, arg) => {
  const UpdatedComp = (props) => {
    const state = useGlobalContext();

    return <Comp label={state} {...props} />;
  };
  return UpdatedComp;
};
