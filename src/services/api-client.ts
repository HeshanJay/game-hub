import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'fdd1cad90f8b4fe3bcfbe623ef8e8174'
    }
})