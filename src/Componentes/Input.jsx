import { useContext } from "react";
import { AppContext } from "../AppContext.jsx";

function InputMetros(){
    const { form, setForm } = useContext(AppContext);

    const handleChange = (event) => {

        let metros = parseInt(event.target.value, 10);

        setForm({ ...form, metros });
      };

    return (
        <>
            <br /><br /><label htmlFor="metros2">Ingresa los metros2:</label>
            <input onChange={handleChange} className="input-text " type="number" id="metros2" min="20" max="500" required/>
        </>
    )
}

export default InputMetros