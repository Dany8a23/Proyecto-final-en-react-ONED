import React from "react";
import "./Menu.css"

export default function Menu() {
    
    return (
        <>
            <nav id="NAVMENU">
                <ul id="ULMENU">
                    <li class="LIMENU"><a class="AMENU" href="#Inicio">Inicio</a></li>
                    <li class="LIMENU"><a class="AMENU" href="#Registro">Registro</a></li>
                    <li class="LIMENU"><a class="AMENU" href="#Rutas">Rutas</a></li>
                    <li class="LIMENU"><a class="AMENU" href="#Propiedades">Uso de PROPS</a></li>
                </ul>
            </nav>
        </>
    );
  }