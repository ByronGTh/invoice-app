import { useEffect } from "react";
import { useState } from "react";
import { getProductos } from "../../services/productoService";
import { useNavigate } from "react-router-dom";

const estadoInicialProducto=[];
export const ListadoDeProductos = ({manejadorDeProducto})=>{

    const [productos, setproductos] = useState(estadoInicialProducto);
    useEffect( ()=>{
        setproductos(getProductos);
    }, []);

    const navigate = useNavigate();

    const agregarProducto = (producto) =>{
        manejadorDeProducto(producto);
        navigate('/factura');
    }

    return(<>
        <div className="container">
            <h3>Listado de productos</h3>
            <div className="row">
                {productos.map(prod =>(
                    <div className="col-4 my-2" key={prod.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{prod.name}</h5>
                                <p className="card-text">{prod.description}</p>
                                <p className="card-text">{prod.price}</p>
                                <button className="btn btn-primary" onClick={ () => agregarProducto(prod) }>Agregar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>);
}