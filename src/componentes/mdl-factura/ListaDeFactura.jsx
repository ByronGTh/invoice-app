import { ArticuloEnLista } from "./ArticuloEnLista";

export const ListaDeFactura = ({items}) => {
    return (<>
        <table className="table table-striped table-hover caption-top">
            <caption className="fw-bold fs-5">Factura</caption>
            <thead className="table-group-divider">
                <tr>
                    <th>Acciones</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <ArticuloEnLista items={items}/>
            </tbody>
            <tfoot className="table-active table-group-divider">
                <tr>
                    <td rowSpan="8">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3} className="text-end">subtotal:</td>
                    <td><span className="badge bg-primary">750</span></td>
                </tr>
                <tr>
                    <td colSpan={3} className="text-end">impuesto (15%):</td>
                    <td><span className="badge bg-primary">750</span></td>
                </tr>
                <tr>
                    <td colSpan={3} className="text-end">descuento:</td>
                    <td><span className="badge bg-primary">750</span></td>
                </tr>
                <tr>
                    <td colSpan={3} className="text-end">excento:</td>
                    <td><span className="badge bg-primary">750</span></td>
                </tr>
                <tr>
                    <td colSpan={3} className="text-end">Envio:</td>
                    <td><span className="badge bg-primary">50</span></td>
                </tr>
                <tr>
                    <td colSpan={3} className="text-end">total articulos:</td>
                    <td><span className="badge bg-primary">750</span></td>
                </tr>
                <tr>
                    <td colSpan={3} className="text-end">Total:</td>
                    <td><span className="badge bg-primary">750</span></td>
                </tr>
                {/* <tr>
                        <td>
                          <table className="table table-striped table-hover table-bordered">
                            <tbody>
                            <tr>
                              <td className="text-end">subtotal:</td>
                              <td><span class="badge bg-primary">750</span></td>
                            </tr>
                            <tr>
                              <td className="text-end">impuesto (15%):</td>
                              <td><span class="badge bg-primary">750</span></td>
                            </tr>
                            <tr>
                              <td className="text-end">descuento:</td>
                              <td><span class="badge bg-primary">750</span></td>
                            </tr>
                            <tr>
                              <td className="text-end">excento:</td>
                              <td><span class="badge bg-primary">750</span></td>
                            </tr>
                            <tr>
                              <td className="text-end">total articulos:</td>
                              <td><span class="badge bg-primary">750</span></td>
                            </tr>
                            <tr>
                              <td className="text-end">Total:</td>
                              <td><span class="badge bg-primary">750</span></td>
                            </tr>

                            </tbody>
                          </table>
                        </td>
                      </tr> */}
            </tfoot>
        </table>
    </>);
}