import React from "react";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
    </div>
  );
}

export default App;