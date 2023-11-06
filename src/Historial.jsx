// import * as React from "react";
import { Link } from "react-router-dom";
import Cuadro from "./Componentes/CuadroHistorial";

function Historial() {
  return (
    <><br /><br />
      <h1>HISTORIAL📋</h1>
      <Cuadro />
      <Link to={"/"}>
        <button id="volver" className="btn btn-dark">VOLVER </button>
      </Link>
    </>
  );
}

export default Historial;
