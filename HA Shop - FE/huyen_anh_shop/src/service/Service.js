import axios from 'axios';

export const postLogin = async (request) => {
    debugger
    const res = await axios.post("http://localhost:8080/api/login", request);
    return res.data;
};

