import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const Layout = (props) => (
  <div>
    <Navbar />
    <style jsx global>{`
      body {
        background-color: red;
        height: 200vh;
      }
      * {
        box-sizing: border-box;
        font-family: "Roboto Condensed", sans-serif;
      }
      .myform {
        background: rgba(255, 255, 255, 0);
        color: white;
        border: 2px solid white;
      }
      .myform::placeholder {
        color: white;
        font-size: 1em;
      }
      .solid-nav {
        background-color: rgba(0, 0, 0, 1);
        /*transition: background-color 1s ease 0s;*/
      }
    `}</style>
  </div>
);

export default Layout;
