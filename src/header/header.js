import React from "react";

const Header = ({ count }) => {
  return (
    <div className={"header"}>
      <h1>ToDoList</h1>
      <div className={"count"}>
        You have <span className="number">{count}</span> things to do
      </div>
    </div>
  );
};

export default Header;
