import { useState, useEffect } from "react";
import "./App.css";

import Home from "./pages/Home.jsx";


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

    
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
