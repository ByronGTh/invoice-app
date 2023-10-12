import { useState } from "react";
import { FormularioCliente } from "./FormularioCliente";
import { DatosClientes } from "./DatosClintes";

export const ListadoDeClientes = () => {
    const [activarFormulario, setActivarFormulario] = useState(false);
    const onActiveForm = () => {
        setActivarFormulario(!activarFormulario);
    }

    const [formularioDetalle, setFormularioDetalle] = useState(false);

    const manejadorEstadoDetalleCliente = (estadoDetalle) => {
        setFormularioDetalle(estadoDetalle);
    }

    return (<>
        <a className="btn btn-primary mb-2" onClick={ onActiveForm }>
            {!activarFormulario ? 'Crear Cliente' : 'Listado de clientes'}
        </a>
        
        <div className="card">
            <div className="card-header">
                Listado de Clientes
            </div>
            <div className="card-body">

            {!activarFormulario ? <DatosClientes/> : <FormularioCliente/>}
                
            </div>

        </div>
    </>);
}