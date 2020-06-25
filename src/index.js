import React from "react";
import ReactDOM from "react-dom";
import Paragraph from "./Paragraph";
{
  /* importing the Paragraph component above */
}

const text = "This is a suffix to test the addition of variables";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      {" "}
      {/*This is setting the options for the header */}
      Hello World!
    </h1>
    <u1>
      <li>This test script. {text}</li>{" "}
      {/* This is to test adding expressions in JSX */}
      <li>
        This is generating a random number: {Math.floor(Math.random() * 10)}
      </li>
    </u1>
    <Paragraph />{" "}
    {/*As there would be nothing that went between the two paragraph tags, I use a self closing tag */}
  </div>,
  document.getElementById("root")
);
