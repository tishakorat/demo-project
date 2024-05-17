import axios from "axios"

export const getAllDataAPI = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/products`)
}

export const loginUserAPI = (value) => {
    return axios.post(`${process.env.REACT_APP_ENDPOINT}/auth/login`, value, { headers: {
        'Content-Type': 'application/json'
    } })
}