import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SeccionInicio from "./Secciones/SeccionInicio.jsx";
import SeccionRegistro from "./Secciones/SeccionRegistro.jsx";
import SeccionRutas from "./Secciones/SeccionRutas.jsx";
import SeccionProps from "./Secciones/SeccionProps.jsx";
import "./App.css"

export default function App() {

  return (
    <>
      <Header />
      <SeccionInicio />
      <SeccionRegistro />
      <SeccionRutas />
      <SeccionProps />
      <Footer />
    </>
  )
};