import { products } from "../data/productos"
export const getProductos = async() => {
    const httpRequest = await fetch('http://localhost:8080/productos');
    const productosBackend = await httpRequest.json();
    return productosBackend;
    //return products; //Trayendo datos con formato json desde un archivo estatico JS
}