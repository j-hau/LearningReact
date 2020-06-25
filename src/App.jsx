import React from "react";
import Paragraph from "./Paragraph";
import Body from "./Body";
import Header from "./Header";
{
  /* importing the Paragraph, Header and Body component above */
}

function App() {
  return (
    <div>
      {/*Imported the components above, to be used inside the app.  WHich is returned to index.js to be displayed*/}
      <Header />
      <Body />
      <Paragraph />{" "}
      {/*As there would be nothing that went between the two paragraph tags, I use a self closing tag */}
    </div>
  );
}

export default App;

{
  /* exporting app as default so it can be imported and used in index.js */
}
