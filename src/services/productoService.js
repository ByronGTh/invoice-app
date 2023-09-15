import axios from "axios";
import { products } from "../data/productos"

export const getProductos = async() => {
    try {
        const httpRequest = await axios.get('http://localhost:8080/productos');
        return httpRequest;
    } catch (error) {
        console.error(error);
    }
}