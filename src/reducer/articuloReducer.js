export const articuloReducer = (state = [], action) => {
    switch (action.type) {
        case 'AgregarProductoAFactura':
            
            return [
                ...state,
                {
                  producto: action.payload,
                  cantidad: 1,
                }
              ];
        case 'ActuralizarCantidadDeProducto':
            
            return state.map( (i) => {
                if( i.producto.id === action.payload.id ){
                  i.cantidad = i.cantidad + 1;
                }
                return i;
              });
        case 'EliminarProductoDeFactura':
            
            return [
                ...action.filter( (i) => i.producto.id !== action.payload )
            ];
    
        default:
            return state;
    }
}