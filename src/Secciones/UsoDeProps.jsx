import React from "react";
import React, { useState } from "react";

export default function UsoDeProps() {

  const [nombre, setNombre] = useState("");

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={handleChange}
      />
      <p>Hola, {nombre || "..."}</p>
    </div>
  );
}