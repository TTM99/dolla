import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { GlobalStyles } from "./Global.styled";
import Home from "./pages";
import Signin from "./pages/signin";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <HashRouter>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </HashRouter>
    </Router>
  );
};

export default App;
