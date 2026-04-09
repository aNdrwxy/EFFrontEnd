import axios from 'axios'

export const postLogin = (user) => {
    return axios.post(`http://127.0.0.1:8000/api/login/`, user);
}

export const postRegister = (user) => {
    return axios.get(`http://127.0.0.1:8000/api/register/`, user);
}