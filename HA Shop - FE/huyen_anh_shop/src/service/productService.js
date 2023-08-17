import axios from "axios";

export const findProductById = async (productId) => {
    console.log(productId)
    try {
        const result = await axios.get(
            `http://localhost:8080/api/${productId}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const findAllProduct = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api`);
        return result.data
    } catch (e) {
        console.log(e);
    }
};

export const search = async (productName) => {
    try {
        const res = await axios.get(
            `http://localhost:8080/api/?search=${productName}`
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const findProductType = async () => {
    try {
        const result = await axios.get(
            `http://localhost:8080/api/type`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const getAllProductByType = async (type) => {
    const res = await axios.get(`http://localhost:8080/api/productByType/${type}`);
    return res.data;
}
