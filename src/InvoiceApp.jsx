import { DatosDeCliente } from "./componentes/mdl-factura/DatosDeCliente";
import { DatosDeEnvio } from "./componentes/mdl-factura/DatosDeEnvio";
import { DatosFactura } from "./componentes/mdl-factura/DatosFactura";
import { ListaDeFactura } from "./componentes/mdl-factura/ListaDeFactura";

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
                <DatosFactura/>
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                  
                  <div className="row mt-3">
                    <div className="col-6">
                      <DatosDeCliente/>
                    </div>
                    <div className="col-6">
                      <DatosDeEnvio/>
                    </div>
                  </div> {/* Fin de row informativo */}

                </div>

                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
              </div>


              <div className="row mt-3">
                <div className="col">
                  {/* <h3>Productos en factura</h3> */}
                  <ListaDeFactura/>
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