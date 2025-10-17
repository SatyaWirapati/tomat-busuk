import axios from "axios";

const api = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
    },
});

export const registerUser = async (email, password) => {
    try {
        const response = await api.post("/register", { email, password });
        return response.data;
    } catch (error) {
        const msg =
            error.response?.data?.error || "Register failed. Please try again.";
        throw new Error(msg);
    }
};


export const loginUser = async (email, password) => {
    try {
        const response = await api.post("/login", { email, password });
        return response.data;
    } catch (error) {
        const msg =
            error.response?.data?.error || "Login failed. Please check credentials.";
        throw new Error(msg);
    }
};

export default api;
