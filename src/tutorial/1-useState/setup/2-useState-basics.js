import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("hehe haha");
  const handleClick = () => {
    if (text === "uuuuuuuuuuuu") {
      setText("hehe haha");
    } else {
      setText("uuuuuuuuuuuu");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
