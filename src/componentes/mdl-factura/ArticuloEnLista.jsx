export const ArticuloEnLista = ({items}) => {
    return (<>
        {items.map( item =>(
            <tr key={item.producto.id}>
                <td>Botones</td>
                <td>{item.producto.name}</td>
                <td>{item.cantidad}</td>
                <td>{item.producto.price}</td>
                <td>{item.cantidad * item.producto.price}</td>
            </tr>

         ))}
    </>);
}