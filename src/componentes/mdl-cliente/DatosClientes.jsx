import { useState } from "react";
import { DetalleCliente } from "./DetalleCliente";
import { useNavigate } from "react-router-dom";

export const DatosClientes = ({manejadorEstadoDetalleCliente}) => {

    const [activarFormulario, setActivarFormulario] = useState(false);
    const onActiveForm = () =>{
        setActivarFormulario(!activarFormulario);
        navigate('/clientes/detalle_cliente');
    }

    const navigate = useNavigate();

    return (<>
        <table className="table table-striped table-hover caption-top">
            <caption className="fw-bold fs-5">Factura</caption>
            <thead className="table-group-divider">
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button type="button" className="btn btn-success" onClick={onActiveForm}>
                            0
                        </button>
                    </td>
                    <td>Nombre del cliente</td>
                    <td>Apellido del cliente</td>
                    <td>0000-000</td>
                    <td>
                        <button type="button" className="btn btn-primary">Crear factura</button>
                        <button type="button" className="btn btn-info m-2">Editar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
                {/*<ArticuloEnLista items={items} quitarDeLista={manejadorParaEliminar}/>*/}
            </tbody>
        </table>
    </>);
}