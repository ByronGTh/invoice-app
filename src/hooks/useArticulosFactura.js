import { useReducer } from "react";
import { articuloReducer } from "../reducer/articuloReducer";
import { ACTUALIZAR_CANTIDAD_DE_PRODUCTO, AGREGAR_PRODUCTO_A_FACTURA, ELIMINAR_PRODUCTO_DE_FACTURA } from "../reducer/etiquetasDeAcciones";

const estadoInicialProducto = JSON.parse(sessionStorage.getItem('listaDeVenta'))  || [];

export const useArticulosFactura = () => {

    const [productos, dispatch] = useReducer(articuloReducer, estadoInicialProducto);

    const agregarProductoAFactura = (producto) => {

        const hasItem = productos.find( (i) => i.producto.id === producto.id);

        if(hasItem){
            dispatch(
                {
                type: ACTUALIZAR_CANTIDAD_DE_PRODUCTO,
                payload: producto
                }
            );
        }else{
            dispatch({
                type: AGREGAR_PRODUCTO_A_FACTURA,
                payload: producto
            });
        }

    }

    const manejadorEliminarProductoDeLista = (id) => {
        dispatch({
            type: ELIMINAR_PRODUCTO_DE_FACTURA,
            payload: id
        });
    }

    return {
        productos,
        agregarProductoAFactura,
        manejadorEliminarProductoDeLista
    };
}