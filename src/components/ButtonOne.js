import React from "react";
import componentWrapper from "../componentWrapper";

function ButtonOne(props) {
    
    //commenting in master in remote server
    console.log(props);
  return <button style={props.styles}>Click ButtonOne</button>;
}

export default componentWrapper(ButtonOne);
