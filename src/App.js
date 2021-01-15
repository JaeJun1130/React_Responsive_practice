import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./styled/GlobalStyle";

function App() {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Hero />
    </>
  );
}

export default App;
