import React from "react";
import componentWrapper from "../componentWrapper";

function ButtonOne(props) {
    console.log(props);
  return <button style={props.styles}>Click ButtonOne</button>;
}

// commenting on branch to test and push

export default componentWrapper(ButtonOne);
