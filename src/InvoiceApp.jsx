import { Navigate, Route, Routes } from "react-router-dom";
import { DatosDeCliente } from "./componentes/mdl-factura/DatosDeCliente";
import { DatosDeEnvio } from "./componentes/mdl-factura/DatosDeEnvio";
import { DatosFactura } from "./componentes/mdl-factura/DatosFactura";
import { ListaDeFactura } from "./componentes/mdl-factura/ListaDeFactura";
import { ListadoDeProductos } from "./componentes/mdl-producto/ListadoDeProductos";
import { useArticulosFactura } from "./hooks/useArticulosFactura";
import { Navbar } from "./componentes/navbar/Navbar";
import { ListadoDeClientes } from "./componentes/mdl-cliente/ListadoDeClientes";
import { DetalleCliente } from "./componentes/mdl-cliente/DetalleCliente";
import { ListaDeUsuarios } from "./componentes/mdl-usuario/ListaDeUsuarios";

export const InvoiceApp = () => {

  const { productos, agregarProductoAFactura, manejadorEliminarProductoDeLista } = useArticulosFactura();
  
  return (<>
    <Navbar/>
    <div className="container-fluid">
      <Routes>
        <Route path="factura" element={
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
                      <ListaDeFactura  items={ productos } manejadorParaEliminar={manejadorEliminarProductoDeLista}/>
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
        }/>
        <Route path="clientes" element={ <ListadoDeClientes/> }/>
        <Route path="productos" element={ <ListadoDeProductos manejadorDeProducto={agregarProductoAFactura}/> }/>
        <Route path="/" element={ <Navigate to={'/factura'}/> }/>     
        <Route path="clientes/detalle_cliente" element={ <DetalleCliente/> }/>
        <Route path="usuarios" element={ <ListaDeUsuarios/> } />
      </Routes>
      
    </div>
  </>);
}