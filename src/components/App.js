import React from "react";
import {
  BrowserRouter,
} from "react-router-dom";

import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

// main container component
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
