import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { GlobalStyles } from "./Global.styled";
import Home from "./pages";
import Signin from "./pages/signin";

const App = () => {
  return (
    <HashRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
