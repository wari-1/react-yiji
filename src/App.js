import React from "react";
import "./App.css";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
