import logo from "./logo.svg";
import React, { Fragment } from "react";
import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";
import Footer from "./components/Footer";
import "./App.css";

/**
 *  Header
 *    ---- Logo
 *   ---- Navigation bar items
 *
 * Body
 *
 *  ----Search
 * ---- Restaurant Cards
 *
 * Footer
 *  --- Copyright
 * ---- Links
 *
 */

// Component Composition

function App() {
  return (
    <>
      <Header />
      <BodyComponent />
      <Footer />
    </>
  );
}

// React.createElement(h1, {} , "Learning Functional Components")
// Babel

export default App;
