import React, { useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    // ضع هنا معرف Google Analytics الخاص بك
    ReactGA.initialize("G-LF89Z489N4"); // مثال: G-ABC123XYZ
    ReactGA.send("pageview");
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
