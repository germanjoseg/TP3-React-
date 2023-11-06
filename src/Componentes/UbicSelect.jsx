import { useContext } from "react";
import { AppContext } from "../AppContext.jsx";

function UbicacionSelect() {
    const { ubicaciones, form, setForm } = useContext(AppContext);

    const handleChange = (event) => {
       
        const selectedUbi = ubicaciones.find((opcion) => opcion.id == event.target.value);
       
    
        setForm({ ...form, selectedUbi });
      };

    return (
        <>
           <br /> <br /><label htmlFor="ubicacion">Selecciona su ubicación</label>
            <select className="input-text" id="ubicacion" onChange={handleChange} required>
                <option value="" disabled="">...</option>
                {ubicaciones.map((ubicacion) => (
                    <option key={ubicacion.id} value={ubicacion.id}>
                        {ubicacion.tipo}
                    </option>
                ))}
            </select>
        </>
    )
}

export default UbicacionSelect