import React from "react";
import Weather from "./Components/Weather";
import AppName from "./Components/AppName";
import Details from "./Components/Details";

const App = () => {
  return (
    <div className="app">
      <AppName />
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ flex: 0.5 }}></div>
        <div style={{}}>
          <Weather />
        </div>
        <div style={{ flex: 1.5, marginLeft: "0px" }}>
          <Details />
        </div>
        <h1>&nbsp;</h1>
      </div>
      <h1 style={{ color: "#f0f0f0", textAlign: "center" }}>Thank you.</h1>
    </div>
  );
};

export default App;
