import React from 'react'
import ReactDOM from 'react-dom/client'
import { InvoiceApp } from './InvoiceApp'
import { ListadoDeProductos } from './componentes/mdl-producto/ListadoDeProductos'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <InvoiceApp />
    </BrowserRouter>
  </React.StrictMode>
)
