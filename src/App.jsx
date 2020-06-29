import React from "react";
import Paragraph from "./Paragraph";
import Body from "./Body";
import Header from "./Header";
{
  /* importing the Paragraph, Header and Body component above */
}
import pi, { twoPi, squarePi } from "./Constants";

{
  /* This is importing the default as pi, but also the extra exports defined in constants.js */
}

function ContactCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

{
  /*Above is creating a "template" that when passed an array of inputs
  called 'props', it accesses individual elements and assigns them to
  HTML tags to be returned and displayed 
  It accesses the individual elements with expected names to assign them*/
}

function App() {
  return (
    <div>
      {/*Imported the components above, to be used inside the app.  WHich is returned to index.js to be displayed*/}
      <Header />
      <Body />
      <Paragraph />{" "}
      {/*As there would be nothing that went between the two paragraph tags, I use a self closing tag */}
      {pi}
      <br />
      {twoPi()}
      <ContactCard
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="111 111 111"
        email="beyonce@beyonce.com"
      />
      {/* This is simply passing the data into the contact card function to be assigned */}
    </div>
  );
}

export default App;

{
  /* exporting app as default so it can be imported and used in index.js */
}
