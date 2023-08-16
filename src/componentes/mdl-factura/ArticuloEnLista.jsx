export const ArticuloEnLista = ({items, quitarDeLista}) => {
    return (<>
        {items.map( item =>(
            <tr key={item.producto.id}>
                <td>
                    <button className="btn btn-danger" onClick={ ()=> quitarDeLista(item.producto.id) }>eliminar</button>
                </td>
                <td>{item.producto.name}</td>
                <td>{item.cantidad}</td>
                <td>{item.producto.price}</td>
                <td>{item.cantidad * item.producto.price}</td>
            </tr>

         ))}
    </>);
}