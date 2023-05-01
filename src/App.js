import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
/* 
  *Different ways to import
  import { Title } from "./Header";
  import {Named1,Named2} from "ABC";
  import {Named1,Named2} as XYZ from "ABC";
  import Default,{Named} from "ABC";
  *ABC.js, ABC.jsx, ABC -> all are accecpeted
*/

const title = <h1>Food Villa</h1>;

// * restaurant data

// ? Optional Chaining

// <React.Fragment></React.Fragment> OR <></>
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
