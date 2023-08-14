import { useState } from "react";
import { DatosDeCliente } from "./componentes/mdl-factura/DatosDeCliente";
import { DatosDeEnvio } from "./componentes/mdl-factura/DatosDeEnvio";
import { DatosFactura } from "./componentes/mdl-factura/DatosFactura";
import { ListaDeFactura } from "./componentes/mdl-factura/ListaDeFactura";
import { ListadoDeProductos } from "./componentes/mdl-producto/ListadoDeProductos";
import { getProductos } from "./services/productoService";

const estadoInicialProducto=[];

export const InvoiceApp = () => {

  const [productos, setProductos] = useState(estadoInicialProducto);

  const agregarProductoAFactura = (producto) => {
    setProductos([
      ...productos,
      {
        producto,
        cantidad: 1,
        subtotal: producto.price * 1 
      }
    ]);
  }

  return (<>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              Ejemplo de factura
            </div>
            <div className="card-body">


              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Factura</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Productos</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                  <div className="row">
                    <div className="col">
                      <DatosFactura/>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <DatosDeCliente/>
                    </div>
                    <div className="col-6">
                      <DatosDeEnvio/>
                    </div>
                  </div> {/* Fin de row informativo */}

                </div>

                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                  <ListadoDeProductos manejadorDeProducto={agregarProductoAFactura}/>
                </div>
              </div>


              <div className="row mt-3">
                <div className="col">
                  <ListaDeFactura  items={ productos }/>
                </div>
              </div> {/* Fin del row contenedor de la tabla */}
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