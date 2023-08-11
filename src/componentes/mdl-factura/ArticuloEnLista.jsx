export const ArticuloEnLista = ({items}) => {
    return (<>
        {items.map( item =>(
            <tr key={item.producto.id}>
                <td>Botones</td>
                <td>{item.producto.name}</td>
                <td>1</td>
                <td>{item.producto.price}</td>
                <td>{item.producto.price * 2}</td>
            </tr>

         ))}
    </>);
}