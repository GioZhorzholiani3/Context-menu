import React from "react";
import "./Context.css";
import ContextItem from "./ContextItem";

const Context = () => {
  return (
    <div className="main">
      <ul >
        <ContextItem>Item1</ContextItem>
        <ContextItem>Item2</ContextItem>
        <ContextItem>Item3</ContextItem>
        <ContextItem>Item4</ContextItem>
      </ul>
    </div>
  );
};

export default Context;
