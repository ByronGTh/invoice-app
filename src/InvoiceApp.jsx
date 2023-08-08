export const InvoiceApp = () => {
  return (<>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              Ejemplo de factura
            </div>
            <div className="card-body">


              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Factura</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Productos</button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">

                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                  <ul className="list-group mt-3">
                    <li className="list-group-item"><span className="fw-bold">ID:</span> 1</li>
                    <li className="list-group-item"><span className="fw-bold">Name:</span> elementos de prueba</li>
                  </ul>
                  <div className="row mt-3">
                    <div className="col-6">
                      <ul className="list-group">
                        <li className="list-group-item fw-bold fs-6 active">Datos de cliente</li>
                        <li className="list-group-item">Nombre Apellido</li>
                        <li className="list-group-item">Pais y ciudad</li>
                        <li className="list-group-item">Calle y numero de calle</li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="list-group">
                        <li className="list-group-item fw-bold fs-6 active">Datos de la empresa</li>
                        <li className="list-group-item">Direccion</li>
                        <li className="list-group-item">Numero de calle</li>
                      </ul>
                    </div>
                  </div> {/* Fin de row informativo */}

                </div>

                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
              </div>


              <div className="row mt-3">
                <div className="col">
                  {/* <h3>Productos en factura</h3> */}
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
                      <tr>
                        <td>Botones</td>
                        <td>Producto de prueba</td>
                        <td>1</td>
                        <td>500</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>Botones</td>
                        <td>Producto de prueba</td>
                        <td>2</td>
                        <td>100</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td>Botones</td>
                        <td>Producto de prueba</td>
                        <td>3</td>
                        <td>150</td>
                        <td>450</td>
                      </tr>
                    </tbody>
                    <tfoot className="table-active table-group-divider">
                      <tr>
                        <td rowspan="8">
                          <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                </div>
              </div> {/* Fin del row contenedor de la tabla */}
              {/* <div className="row">
                <div className="col-6">
                  
                </div>
              </div> */}
              <div className="row align-items-end">
                <div className="col">
                  <form action="">
                    <button type="submit" className="btn btn-primary">Facturar</button>
                    <button type="button" className="btn btn-primary m-2">Cancelar factura</button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}