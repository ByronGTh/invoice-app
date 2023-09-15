import axios from "axios";

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
        return await axios.post(BASE_URL, {name, description, price});
    } catch (error) {
        console.error(error);
    }

    return undefined;
}

export const update = async({id, name, description, price}) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {name, description, price});
    } catch (error) {
        console.error(error);
    }

    return undefined;
}

export const remove = async(id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}