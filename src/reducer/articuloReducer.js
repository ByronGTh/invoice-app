import { ACTUALIZAR_CANTIDAD_DE_PRODUCTO, AGREGAR_PRODUCTO_A_FACTURA, ELIMINAR_PRODUCTO_DE_FACTURA } from "./etiquetasDeAcciones";

export const articuloReducer = (state = [], action) => {
    switch (action.type) {
        case AGREGAR_PRODUCTO_A_FACTURA:
            
            return [
                ...state,
                {
                  producto: action.payload,
                  cantidad: 1,
                }
              ];
        case ACTUALIZAR_CANTIDAD_DE_PRODUCTO:
            
            return state.map( (i) => {
                if( i.producto.id === action.payload.id ){
                    return {
                        ...i,
                        cantidad: i.cantidad + 1

                    }
                  //i.cantidad = i.cantidad + 1;
                }
                return i;
              });
        case ELIMINAR_PRODUCTO_DE_FACTURA:
            return state.filter( (i) => i.producto.id !== action.payload );

        case 'cargarProductos':
            return action.payload;
    
        default:
            return state;
    }
}