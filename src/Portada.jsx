// import * as React from "react";
import { Link } from "react-router-dom";
import Form from "./Componentes/Form";

function Portada () {
    
    return (
        <>
            <br /><h1>Seguros del Hogar 🏡</h1><br />
            <Form/>
             <br /> <br /> <Link to={"historial"}>
             <button id="historial" className="btn-dark">
                    <span>Ver historial 📋</span>
                </button>
            </Link>
        </>
    )
}

export default Portada