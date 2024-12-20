import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./SeccionRutas.css"

function Frase1() {
  return <h1>Yeepa gente! Soy Juan Perez y a que mola...</h1>;
}

function Frase2() {
  return <h1>Eyyyyy! Wapisimos! Aqui Vegetta777 en un nuevo mundo de Minecraft...</h1>;
}

function Frase3() {
  return <h1>Pero que ha pasado!!</h1>;
}


export default function SeccionRutas() {
    return (
    <>
        <div id="Rutas">
            <h1>Seccion de "RUTAS"</h1>
            <label>Selecciona una opcion del siguiente Menu de navegacion:</label>
            <hr />
    <Router>
      <div>
        <nav>
          <Link to="/">Frase 1</Link> | <Link to="/Frase2">Frase 2</Link> | <Link to="/Frase3">Frase 3</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Frase1 />} />
          <Route path="/Frase2" element={<Frase2 />} />
          <Route path="/Frase3" element={<Frase3 />} />
        </Routes>
      </div>
    </Router>
        </div>
    </>
    )
  }