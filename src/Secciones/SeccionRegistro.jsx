import React from "react"
import "./SeccionRegistro.css"
import { useState } from "react"


export default function SeccionFormularios() {

const [datos , setDatos] = useState({})
const [error, setError] = useState('')

function handleDatos(evento) {
    const name = evento.target.name;
    const value = evento.target.value;
    setDatos({
        ...datos,
        [name]: value
    });
}

function handleSubmit(evento) {
    evento.preventDefault();
    setError('');
    if (!datos.clave || datos.clave.length < 3) {
        setError('La clave es obligatoria y de al menos 3 caracteres');
    }
}

return (
    <div id="Registro">
    <h1>Seccion de registro "USO DE FORMULARIOS Y ESTADOS"</h1>
    <div id="Form">
    <form onSubmit={handleSubmit}>

        <div>
            <label>Clave</label>
            <input type="text" name="clave" onChange={handleDatos}/>
        </div>
        <div>
            <label>Nombre</label>
            <input type="text" name="nombre" onChange={handleDatos}/>
        </div>
        <div>
            <label>Email</label>
            <input type="text" name="email" onChange={handleDatos}/>
        </div>
        <div>
            <label>Telefono</label>
            <input type="text" name="telefono" onChange={handleDatos}/>
        </div>
        <div>
            <button>Enviar</button>
        </div>

        {
            error != '' && (
                <strong> {error} </strong>
            )
        }

    </form>
    </div>
    </div>
)
}