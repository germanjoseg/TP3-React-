// import * as React from "react";
import { Link } from "react-router-dom";
import Cuadro from "./Componentes/Cuadro";

function Historial() {
  return (
    <><br /><br />
      <h1>Historial  📋</h1>
      <Cuadro />
      <Link to={"/"}>
        <button id="volver" className="btn btn-dark">VOLVER </button>
      </Link>
    </>
  );
}

export default Historial;
