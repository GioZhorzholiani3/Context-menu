import React, { useState, useEffect } from "react";
import "./Context.css";

const ContextMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = () => {
    console.log("edit");
    setIsOpen(false);
  };

  const handleDelete = () => {
    console.log("delete");
    setIsOpen(false);
  };

  useEffect(() => {
    props.isRightClicked && setIsOpen(true);
  }, [props.isRightClicked]);

  useEffect(() => {
    const hideMenu = (e) => {
      const parent = props.parent.current;
      if (parent.contains(e.target)) {
        e.preventDefault();
      }
      if (!parent.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", hideMenu);

    return () => {
      window.removeEventListener("click", hideMenu);
    };
  });

  return isOpen ? (
    <div >
      {props.children}
      <div >
        <button type="button" className="btn" onClick={handleEdit}>
          edit
        </button>
        <button type="button" className="btn" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  ) : null;
};

export default ContextMenu;
