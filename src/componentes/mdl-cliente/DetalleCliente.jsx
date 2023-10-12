export const DetalleCliente = () => {
    return (<>
        <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Nombre y Apellido</li>
            <li class="list-group-item">Colonia barrio o residencial</li>
            <li class="list-group-item">999-888</li>
            <li class="list-group-item">fecha de registro</li>
        </ul>

        <table className="table table-striped table-hover caption-top">
            <caption className="fw-bold fs-5">Registro de facturas del cliente</caption>
            <thead className="table-group-divider">
                <tr>
                    <th># Factura</th>
                    <th>Tipo de compra</th>
                    <th>Descripcion</th>
                    <th>Total</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button type="button" className="btn btn-success">
                            1
                        </button>
                    </td>
                    <td>Contado</td>
                    <td>Productos para el hogar</td>
                    <td>1,500.00</td>
                    <td>Lunes 22-Septiembre-2023</td>
                </tr>
                <tr>
                    <td>
                        <button type="button" className="btn btn-success">
                            2
                        </button>
                    </td>
                    <td>Credito</td>
                    <td>compra de ropa</td>
                    <td>500.00</td>
                    <td>Domingo 22-Septiembre-2023</td>
                </tr>
                <tr>
                    <td>
                        <button type="button" className="btn btn-success">
                            3
                        </button>
                    </td>
                    <td>Contado</td>
                    <td>Productos variados</td>
                    <td>5,500.00</td>
                    <td>Jueves 22-Septiembre-2023</td>
                </tr>
                {/*<ArticuloEnLista items={items} quitarDeLista={manejadorParaEliminar}/>*/}
            </tbody>
        </table>
    </>);
}