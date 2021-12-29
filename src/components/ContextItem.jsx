import React, { useRef, useState } from "react";
import ContextMenu from "./ContextMenu";
import "./Context.css";

const ContextItem = ({ children }) => {
  const listItem = useRef();
  const [isRightClicked, setRightClicked] = useState(false);

  return (
    <li
      className="item"
      ref={listItem}
      onContextMenu={(e) => {
        e.preventDefault();
        setRightClicked(e);
        
      }}
    >
      <p>{children}</p>

      <ContextMenu
        parent={listItem}
        children={children}
        isRightClicked={isRightClicked}
      />
    </li>
  );
};

export default ContextItem;
