import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:5000" });

export const getSession = (data) => {
    return instance.post("/api/account/login", data).then((res) => res.data);
};

export const getInfor = (id, token) => {
    return instance
        .get("/api/account", {
            params: { id },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
};
