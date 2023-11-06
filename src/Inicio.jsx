// import * as React from "react";
import { Link } from "react-router-dom";
import Form from "./Componentes/Formulario";

function Inicio () {
    
    return (
        <>
            <br /><h1>SEGUROS DEL HOGAR🏡</h1><br />
            <Form/>
             <br /> <br /> <Link to={"historial"}>
             <button id="historial" className="btn-dark">
                    <span>VER HISTORIAL📋</span>
                </button>
            </Link>
        </>
    )
}

export default Inicio