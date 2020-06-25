import React from "react";

const text = "This is a suffix to test the addition of variables";

function Body() {
  return (
    <p>
      {/*This codeblock below is used to test using variables inside of JSX tags 
        using {} to delimit it */}{" "}
      This test script. {text}
      <br />
      This is generating a random number: {Math.floor(Math.random() * 10)}
    </p>
  );

  {
    /* This is to test adding expressions in JSX */
  }
}

export default Body;
