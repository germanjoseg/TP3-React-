
function Cuadro() {
    let historial = []

    const getDatos = () => {
        const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []

        historial = historialCotizaciones

        for (let i = 0; i < historial.length; i++) {
            console.log(historial[i])
        }
    }

    getDatos()

    return (
        <>
            <div className="container border border-2 rounded border-primary">
                <table className="table table-hover mt-2">
                    <thead className="border-bottom border-primary">
                        <tr>
                            <th>FECHA DE COTIZACIÓN</th>
                            <th>PROPIEDAD</th>
                            <th>UBICACIÓN</th>
                            <th>METROS CUADRADOS</th>
                            <th>PÓLIZA MENSUAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historial.map((elemento) => (
                            <tr key={elemento.getData}>
                                
                                <td key={elemento.id}>{elemento.fecha}</td>
                                <td key={elemento.id}>{elemento.propiedad}</td>
                                <td key={elemento.id}>{elemento.ubicacion}</td>
                                <td key={elemento.id}>{elemento.metros}</td>
                                <td key={elemento.id}>{elemento.poliza}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Cuadro