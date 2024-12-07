import React, { useEffect, useState } from "react";
import ApiManager from "./components/ApiManager";
import hplogo from "./images/hplogo.png";

function App() {
  return (
    <div className="App">
      <img src={hplogo} alt="logo"></img>
      <div>
        <ApiManager />
      </div>
    </div>
  );
}

export default App;
