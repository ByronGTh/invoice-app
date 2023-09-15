import axios from "axios";
import { products } from "../data/productos"

const BASE_URL = 'http://localhost:8080/productos';

export const getProductos = async() => {
    try {
        const httpRequest = await axios.get(BASE_URL);
        return httpRequest;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const save = async({}) => {
    try {
        return axios.post(BASE_URL, {name, description, price});
    } catch (error) {
        console.error(error);
    }

    return undefined;
}

