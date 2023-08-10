import React from 'react'
import ReactDOM from 'react-dom/client'
import { InvoiceApp } from './InvoiceApp'
import { ListadoDeProductos } from './componentes/mdl-producto/ListadoDeProductos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListadoDeProductos/>
    <InvoiceApp />
  </React.StrictMode>,
)
